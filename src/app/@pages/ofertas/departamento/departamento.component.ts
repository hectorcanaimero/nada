import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageMap } from '@ngx-pwa/local-storage';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

import { DataService } from '@core/services/data.service';
import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { MenuDepartamento, MenuSetor } from '@core/interfaces/menu';
import { Ofertas } from '@core/interfaces/ofertas';
import { slideDownInOut } from '@core/animations/slide';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss'],
  animations: [ slideDownInOut ]
})
export class DepartamentoComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  p: number = 1;
  itemsPerPage: number = 12;
  currentPage: number = 1;
  totalItem: number = 0;
  search: string = '';
  isLoading: boolean = false;
  viewDepart: boolean = true;
  viewSector: string = 'out';
  init: boolean = false;

  loja: any = [];
  menu: any = [];
  items$: Observable<Ofertas[]>;
  menuSector$: Observable<MenuSetor[]>;
  menuDepartamento$: Observable<MenuDepartamento[]>;

  slug$: Observable<string>;

  constructor(
    private router: Router,
    private db: DataService,
    private seo: SeoService,
    private util: UtilService,
    private act: ActivatedRoute,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    this.loja = this.util.StorageParse('Loja');
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.getDepartamento(data));
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  getDepartamento = (slug: any) => {
    console.log(slug);
    this.menuDepartamento$ = this.db.getMenuOfertas(`menuDepartamentoSlug?slug=${slug}`).pipe(
      map((res) => res[0]),
      tap(({ nome, codigo }) => this.proccess(nome, codigo)),
    )
  }

  private proccess = (nome: string, codigo: number) => {
    this.getSeo(nome);
    this.getData(codigo)
  }

  getData = (codigo: number) => {
    this.isLoading = true;
    this.storageMap.watch('Loja').subscribe(({ loja }) => {
      this.menuSector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${codigo}`);
      this.items$ = this.db.OfertasLojaDepartamento(loja, codigo).pipe(
        tap((res) => this.totalItem = res.length),
        finalize(() => this.isLoading = false));
    })
  }

  getMenuDepartamento = (loja: number) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);

  onSearch = (e: any) => console.log(e.target.value);
  toogleSector = () =>  this.viewSector = this.viewSector === 'out' ? 'in' : 'out';;
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

  pageChange = (ev: any) => {
    console.log(ev);
    this.itemsPerPage = ev -1;
    const data = this.items$.pipe(map((res) => res.slice(this.itemsPerPage, this.itemsPerPage)))
    this.items$ = data;
  }

  trackById = (index: number, items: any) => items[index];
}
