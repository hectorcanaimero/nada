import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { NewsService } from 'src/app/shared/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/app/shared/services/seo.service';
import { map, tap, debounceTime } from 'rxjs/operators';

import { Lojas } from './../../../shared/services/interfaces/news';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy, OnChanges {

  items: Observable<Lojas>;
  setores: any [];
  servicos: any = [];
  imagem: any = [];
  region: any = [];
  lojas: any = [];
  slug: any = [];

  private activateSubs: Subscription;
  private imgSubs: Subscription;
  private lojaRegionSubs: Subscription;
  private lojaSubs: Subscription;
  private lojaXRegionSubs: Subscription;


  constructor(
    private news: NewsService,
    private activate: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.onInit();
  }

  ngOnChanges() {
    this.getItems(this.slug);
    this.getRegion();
  }

  ngOnDestroy(): void {
    this.activateSubs.unsubscribe();
    this.lojaRegionSubs.unsubscribe();
    if (this.lojaXRegionSubs) { this.lojaXRegionSubs.unsubscribe(); }
    if (this.lojaSubs) { this.lojaSubs.unsubscribe(); }
  }

  onInit = () => {
    this.getRegion();
    this.activateSubs = this.activate.url.subscribe(data => {
      this.slug = data[0].path;
      this.getItems(data[0].path);
    });
  }

  getItems = (slug: any) => {
    this.items = this.news.LojaSlug(slug).pipe(
      debounceTime(400),
      tap((res) => {
        this.getSeo(res);
        this.setores = res.setores.split(',');
        this.servicos = res.servicos.split(',');
      }),
      map((res) => res),
      );
  }


  getRegion = () => { this.lojaRegionSubs = this.news.LojaRegion().subscribe(data => this.region = data); }

  onLoja = (e: any) => {
    if (e.target.value === 'All') {
      this.lojaSubs = this.news.Lojas(100).subscribe(data => (this.lojas = data));
    } else {
      this.lojaXRegionSubs = this.news.LojaPorRegion(e.target.value)
      .subscribe(data => (this.lojas = data));
    }
  }

  goToLoja = (e: any) => {
    if (e.target.value !== 'All') {
      this.seo.dataLayerTracking(
        {event: 'findStore', storeAction: 'Ver Loja', storeName: e.target.value }
      );
      this.onInit();
      this.router.navigate(['lojas', e.target.value]);
    }
  }

  onTracking = (loja: string, type: string) => this.seo.dataLayerTracking( {event: 'storepageAction', storeName: loja, buttonAction: type });

  getSeo = (items: any) => {
    this.seo.addCanonical();
    this.seo.dataLayerPage(items.title1);
    this.seo.updateTags(
      {
        title: `${items.title.rendered} - Telefones e Endereço`,
        description: items.content.rendered,
        image: items.medium
      }
    );
  }
}
