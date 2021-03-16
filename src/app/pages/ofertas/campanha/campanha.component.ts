import { StorageMap } from '@ngx-pwa/local-storage';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../shared/services/news.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SeoService } from '../../../shared/services/seo.service';


@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
})
export class CampanhaComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  p: number = 1;
  search: string = '';
  str: number;

  view: boolean = true;
  init: boolean = false;

  loja: any = [];
  menu: any = [];
  items: any = [];
  campanha: any = [];
  departamento: any = [];

  slug: Observable<string>;

  constructor(
    private act: ActivatedRoute,
    private news: NewsService,
    private util: UtilService,
    private api: ApiService,
    private seo: SeoService,
    private router: Router,
    private storageMap: StorageMap
  ) { }

  ngOnInit(): void {
    this.seo.addCanonical();
    const url = this.router.url.split('/');
    const value = url[url.length - 1];
    if (value.split('?')[0] === 'init') this.init = true;
    this.slug = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug.subscribe(data => this.getCampanha(data));
  }


  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  getCampanha = (slug: string) => {
    this.campanha = this.news.Campanha(slug).pipe(
      map((res) => res[0]),
      tap((res) => {
        this.getSeo(res);
        this.storageMap.watch('Loja').subscribe(({ loja }) => {
          if (res['code']) {
            this.getMenuDepartamentoCampanha(loja, res['code']);
            this.items = this.api.OfertasLojaCampanha(loja, res['code'], 60);
          } else {
            this.getMenuDepartamentoSlug(loja, res['slugCampanha']);
            this.items = this.api.OfertasLojaSlug(loja, res['slugCampanha'], 60);
          }
        })
      })
    );
  }

  getMenuDepartamentoSlug = (loja: number, slug: string) => this.api.getCollection(
                                                            `/Menus/MenuDepartamentoOfertasLojaSlug?loja=${loja}&slug=${slug}`);

  getMenuDepartamentoCampanha = (loja: number, campanha: number) => this.departamento = this.api.getCollection(
                                                                                        `/Menus/MenuDepartamentoOfertasLojaCampanha?loja=${loja}&campanha=${campanha}`);

  toogle = (str: number) => {
    this.str = str;
    this.view = !this.view;
  }

  getSeo = (item: any) => {
    this.seo.updateTags({
      title: `Confira as ${item.title} | Condor.com.br`,
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
    });
    this.seo.addCanonical();
    this.seo.dataLayerPage(item.title);
  }
}
