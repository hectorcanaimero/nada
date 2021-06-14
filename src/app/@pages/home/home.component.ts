import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map, finalize, takeUntil } from 'rxjs/operators';

import { Imagens } from '@core/interfaces/news';
import { Ofertas } from '@core/interfaces/ofertas';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  show: boolean = true;
  ofertasdia: any = [];
  isLoading: boolean = false;
  data$: Observable<any[]>;
  items$: Observable<Ofertas[]>;
  banner$: Observable<Imagens[]>;
  lojaSelecionada$: Observable<any>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private seo: SeoService,
    private util: UtilService,
    private news: NewsService,
    private ch: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getLoadOfertas();
    this.seo.dataLayerPage('Home');
    this.news.getBanners().pipe(takeUntil(this.destroy$)).subscribe();
    this.data$ = this.util.getStatic$().pipe(
      map((res) => res[3].data),
      finalize(() => this.isLoading = false)
    );
  }

  getLoadOfertas = () => {
    this.ch.detectChanges();
  }
}
