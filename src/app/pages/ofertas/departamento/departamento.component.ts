import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';

import { map, tap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { SeoService } from '../../../shared/services/seo.service';
import { UtilService } from '../../../shared/services/util.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  p: number = 1;
  search: string = '';

  viewDepart: boolean = true;
  viewSector: boolean = true;
  init: boolean = false;

  loja: any = [];
  menu: any = [];
  items: any = [];
  sector: any = [];
  departamento: any = [];

  slug: Observable<string>;

  constructor(
    private router: Router,
    private api: ApiService,
    private seo: SeoService,
    private util: UtilService,
    private act: ActivatedRoute,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.loja = this.util.StorageParse('Loja');
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => {
      const url = this.router.url.split('/');
      const value = url[url.length - 1];
      if (value.split('?')[0] === 'init') { this.init = true; }
      this.getDepartamento(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  getDepartamento = (slug: string) => {
    this.departamento = this.api.getMenuOfertas(`menuDepartamentoSlug?slug=${slug}`).pipe(
      map((res) => res[0]),
      tap((res) => {
        this.getSeo(res.nome);
        this.storageMap.watch('Loja').subscribe(({ loja }) => {
          this.getMenuDepartamento(loja);
          this.getMenuSector(loja, res.codigo);
          this.api.OfertasLojaDepartamento(loja, res.codigo).subscribe((items) => this.items = items);
        })
      })
    )
  }

  getMenuSector = (loja: number, departamento: number) => this.sector = this.api.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${departamento}`);
  getMenuDepartamento = (loja: number) => this.menu = this.api.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);

  onSearch = (e: any) => console.log(e.target.value);
  toogleSector = () =>  this.viewSector = !this.viewSector;
  toogleDepart = () =>  this.viewDepart = !this.viewDepart;

  getSeo = (departamento: string) => {
    this.seo.updateTags({
      title: `Confira as Ofertas de ${departamento} | Condor.com.br`,
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.addCanonical();
    this.seo.dataLayerPage(departamento);
  }
}
