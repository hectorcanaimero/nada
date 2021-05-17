import { StorageMap } from '@ngx-pwa/local-storage';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription, Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

import { SeoService } from '@core/services/seo.service';
import { DataService } from '@core/services/data.service';
import { NewsService } from '@core/services/news.service';
import { UtilService } from '@core/services/util.service';
import { Campanha } from '@core/interfaces/news';


@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
})
export class CampanhaComponent implements OnInit {

  subscription: Subscription;

  p: number = 1;
  search: string = '';
  str: number;

  view: boolean = true;
  init: boolean = false;

  loja: any = [];
  menu: any = [];
  items: any = [];
  departamento: any = [];

  slug$: Observable<string>;
  campanha$: Observable<Campanha>;

  constructor(
    private act: ActivatedRoute,
    private news: NewsService,
    private util: UtilService,
    private db: DataService,
    private seo: SeoService,
    private router: Router,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe(data => this.getCampanha(data));
  }

  getCampanha = (slug: string) => {
    this.campanha$ = this.news.Campanha(slug).pipe(
      map((res) => res[0]), tap((res) => this.proccess(res)), delay(1000)
    );
  }

  private proccess = (res: any) => {
    console.log(res);
    this.setSeo(res);
    this.storageMap.watch('Loja').subscribe(({ loja }) => {
      if (res.code) {
        console.log(res.code);
        this.getMenuDepartamentoCampanha(loja, res.code);
        this.items = this.db.OfertasLojaCampanha(loja, res.code, 60);
        this.items.subscribe((res) => console.log(res));
      } else {
        console.log('Code: ', res.code);
        this.getMenuDepartamentoSlug(loja, res.slugCampanha);
        this.items = this.db.OfertasLojaSlug(loja, res.slugCampanha, 60);
      }
    })
  }

  getMenuDepartamentoSlug = (loja: number, slug: string) => {
    this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaSlug?loja=${loja}&slug=${slug}`);
  }

  getMenuDepartamentoCampanha = (loja: number, campanha: number) => {
    this.departamento = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaCampanha?loja=${loja}&campanha=${campanha}`);
  }

  toogle = (str: number) => {
    this.str = str;
    this.view = !this.view;
  }

  private setSeo = (item: any) => {
    this.seo.addCanonical();
    this.seo.updateTags({
      title: `Confira as ${item.title} | Condor.com.br`,
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
