import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Imagens } from '@core/interfaces/news';
import { SeoService } from '@core/services/seo.service';
import { NewsService } from '@core/services/news.service';
import { DataService } from '@core/services/data.service';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  show: boolean = true;
  ofertasdia: any = [];

  data$: Observable<any[]>;
  banner$: Observable<Imagens[]>;
  lojaSelecionada$: Observable<any>;

  constructor(
    private seo: SeoService,
    private db: DataService,
    private util: UtilService,
    private news: NewsService,
    private ch: ChangeDetectorRef,
    private storageMap: StorageMap,
  ) {}

  ngOnInit(): void {
    this.seo.dataLayerPage('Home');
    this.data$ = this.util.getStatic$().pipe(map((res) => res[3].data));
    this.news.getBanners().pipe(take(1)).subscribe();
    this.getLoadOfertas();
  }

  ngAfterViewInit () {
    this.getLoadOfertas();
  }

  getLoadOfertas = () => {
    this.storageMap.watch('Loja').pipe(take(1)).subscribe((res) => {
      this.db.getOfertas(res['loja']).pipe(take(1)).subscribe();
    });
    this.ch.detectChanges();
  }
}
