import { SeoService } from 'src/app/shared/services/seo.service';
import { NewsService } from 'src/app/shared/services/news.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  data$: Observable<any[]>;
  show: boolean = true;
  ofertasdia: any = [];
  ofertasSubscription: Subscription;

  banner: any = [];
  bannerSubscription: Subscription;

  constructor(
    private seo: SeoService,
    private api: ApiService,
    private util: UtilService,
    private news: NewsService,
    private cd: ChangeDetectorRef,
    private storageMap: StorageMap,
    ) {}

  ngOnInit(): void {
    this.show = true;
    this.seo.dataLayerPage('Home');
    this.data$ = this.util.getStatic$().pipe(map((res) => res[3].data));
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
    this.banner = this.news.getBanners();
    this.bannerSubscription = this.banner.subscribe(res => res);
    this.storageMap.watch('Loja').subscribe(({ loja }) => {
      if (loja) {
        this.ofertasdia = this.api.getOfertas(loja)
        this.ofertasSubscription = this.ofertasdia.subscribe((res: any) => res);
      }
    });
  }

  ngOnDestroy() {
    if (this.ofertasSubscription) this.ofertasSubscription.unsubscribe();
    if (this.bannerSubscription) this.bannerSubscription.unsubscribe();
  }
}
