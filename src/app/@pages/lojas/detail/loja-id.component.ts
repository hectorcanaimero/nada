import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';

import { Lojas } from '@core/interfaces/news';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';

@Component({
  selector: 'app-loja-id',
  templateUrl: './loja-id.component.html',
  styleUrls: ['./loja-id.component.scss']
})
export class LojaIdComponent implements OnInit {

  slug$: Observable<String>;
  items$: Observable<Lojas>;
  region$: Observable<any[]>;
  lojas$: Observable<any>;
  isLoading: boolean = false;

  setores: any [];
  servicos: any = [];

  constructor(
    private router: Router,
    private seo: SeoService,
    private news: NewsService,
    private activate: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.slug$ = this.activate.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
    this.slug$.subscribe((res) => this.getItems(res));
    this.region$ = this.news.LojaRegion();
  }

  getItems = (slug: any) => {
    this.isLoading = true;
    this.items$ = this.news.LojaSlug(slug).pipe(
      tap((res) => { this.setSeo(res); this.splitTypes(res) }),
      map((res) => res), finalize(() => this.isLoading = false)
    );
  }


  onLoja = (ev: any) => {
    const value = ev.target.value
    if (value === 'All') this.lojas$ = this.news.Lojas(100);
    else this.lojas$ = this.news.LojaPorRegion(value);
  }

  goToLoja = (ev: any) => {
    const value = ev.target.value
    if (value !== 'All') {
      this.seo.dataLayerTracking( {event: 'findStore', storeAction: 'Ver Loja', storeName: value } );
      this.router.navigate(['lojas', value]);
    }
  }

  onTracking = (loja: string, type: string) => {
    this.seo.dataLayerTracking( {event: 'storepageAction', storeName: loja, buttonAction: type });
  }

  private splitTypes = (res: any) => {
    this.setores = res.setores.split(',');
    this.servicos = res.servicos.split(',');
  }

  private setSeo = (items: any) => {
    this.seo.addCanonical();
    this.seo.dataLayerPage(items.title1);
    this.seo.updateTags( {
      title: `${items.title.rendered} - Telefones e Endereço`,
      description: items.content.rendered,
      image: items.medium
    } );
  }

  trackBy = (index: number, item: any) => item[index];
}
