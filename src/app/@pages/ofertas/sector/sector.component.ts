import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription, Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { DataService } from '@core/services/data.service';
import { MenuSetor } from '@core/interfaces/menu';
import { Ofertas } from '@core/interfaces/ofertas';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoading: boolean = false;
  p: number = 1;
  search: string = '';

  viewDepart: boolean = true;
  viewSector: boolean = true;
  init: boolean = false;

  url: any = [];
  menu: any = [];
  sector$: Observable<MenuSetor[]>;

  slug$: Observable<string>;
  items$: Observable<Ofertas[]>;
  menuSector$: Observable<MenuSetor>;

  constructor(
    private router: Router,
    private db: DataService,
    private seo: SeoService,
    private util: UtilService,
    private act: ActivatedRoute,
    private storageMap: StorageMap,
  ) { }

  ngOnInit(): void {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.proccess(data));
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  private proccess = (slug: any) => {
    this.seo.addCanonical();
    this.getSector(slug)
  }

  getSector = (slug: string) => {
    this.isLoading = true;
    this.url = { nome: this.router.url.split('/')[2], link: this.util.toSlug(this.router.url.split('/')[2]) };
    this.menuSector$ = this.db.getMenuOfertas(`menuSetorSlug?slug=${slug}`).pipe(
      map((res) => res[0]), tap(({ dep_id, codigo }) => this.watchStorage(dep_id, codigo),
      finalize(() => this.isLoading = false))
    );
  }

  private watchStorage = (depId: number, codigo: number) => {
    this.storageMap.watch('Loja').subscribe(({ loja }) => {
      this.getMenuDepartamento(loja);
      this.sector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${depId}`);
      this.items$ = this.db.OfertasLojaDepartamentoSetor(loja, depId, codigo).pipe(
        map((data) => data.filter((row) => row.produtos))
      );
    })
  }


  getMenuDepartamento = (loja: number) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);

  toogle = () => this.viewSector = !this.viewSector;
  busca = (e: any) => this.search = e.target.value;

  private Seo = (title: string) => {
    this.seo.addCanonical();
    this.seo.setTitle(`${title} | Rede Condor`);
    this.seo.updateTagName(`${title} | Rede Condor`);
    this.seo.dataLayerPage(title);
  }
  trackBy = (index: number, item: any) => item[index];

}
