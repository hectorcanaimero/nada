import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/shared/services/util.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SeoService } from '../../../shared/services/seo.service';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  p: number = 1;
  search: string = '';

  viewDepart: boolean = true;
  viewSector: boolean = true;
  init: boolean = false;

  menu: any = [];
  items: any = [];
  sector: any = [];
  path: any = [];
  url: any = [];

  slug: Observable<string>;

  constructor(
    private act: ActivatedRoute,
    private util: UtilService,
    private api: ApiService,
    private router: Router,
    private seo: SeoService,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => {
      const url = this.router.url.split('/');
      const value = url[url.length - 1];
      if (value.split('?')[0] === 'init') this.init = true;
      this.getSector(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  getSector = (slug: string) => {
    const arr = [];
    this.url = { nome: this.router.url.split('/')[2], link: this.util.toSlug(this.router.url.split('/')[2]) };
    this.path = this.api.getMenuOfertas(`menuSetorSlug?slug=${slug}`).pipe(
      map((res) => res[0]),
      tap((res) => {
        this.storageMap.watch('Loja').subscribe(({ loja }) => {
          this.getMenuDepartamento(loja);
          this.getMenuSector(loja, res.dep_id);
          this.items = this.api.OfertasLojaDepartamentoSetor(loja, res.dep_id, res.codigo).pipe(map((data) => data.filter((row) => row.produtos)));
        })
      })
    );
  }

  getMenuSector = (loja: number, departamento: number) => this.sector = this.api.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${departamento}`);

  getMenuDepartamento = (loja: number) => this.menu = this.api.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);

  toogle = () => this.viewSector = !this.viewSector;
  busca = (e: any) => this.search = e.target.value;

  private Seo = (departamento: string) => {
    this.seo.addCanonical();
    this.seo.setTitle(`${departamento} | Rede Condor`);
    this.seo.updateTagName(`${departamento} | Rede Condor`);
    this.seo.dataLayerPage(departamento);
  }
}
