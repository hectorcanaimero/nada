import { DataService } from './@core/services/data.service';
import { Component, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { StorageMap } from '@ngx-pwa/local-storage';
import { TranslateService } from '@ngx-translate/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NgcCookieConsentService, NgcInitializeEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';


import { take, takeUntil } from 'rxjs/operators';
import { Observable, fromEvent, Subject } from 'rxjs';

import { Static } from '@core/interfaces/static';
import { SeoService } from '@core/services/seo.service';
import { UtilService } from '@core/services/util.service';
import { NewsService } from '@core/services/news.service';
import { UpdateService } from './@core/services/update.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('politica', { static: true }) public politica: any;

  data$: Observable<Static[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    router: Router,
    private seo: SeoService,
    private db: DataService,
    private util: UtilService,
    private news: NewsService,
    private sw: UpdateService,
    private storageMap: StorageMap,
    private translateService:TranslateService,
    private ccService: NgcCookieConsentService,
    private gtmService: GoogleTagManagerService,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        this.gtmService.pushTag({ event: 'page', pageName: item.url });
      }
    });
    if (isPlatformBrowser(this.platformId)) sw.checkForUpdates();
  }
  ngOnInit(): void {
    this.dados();
    this.getSeo();
    if (isPlatformBrowser(this.platformId)) this.setCookies();
  }

  ngAfterViewInit() {
    this.storageMap.has('Loja').subscribe(res => {
      if (res === false) {
        this.storageMap.set('Loja', environment.loja).subscribe(() => {});
      }
    });
  }

  onActivate(event: any) {
    // const scrollToTop = window.setInterval(() => {
    //   const pos = window.pageYOffset;
    //   if (pos > 0) window.scrollTo(0, pos - 20);
    //   else window.clearInterval(scrollToTop);
    // }, 16);
  }


  setCookies = () => {
    this.getLang();
    this.popupCookies();
  }
  private popupCookies = () => {
    this.ccService.initialize$.subscribe((event: NgcInitializeEvent) => console.log(`initialize: ${JSON.stringify(event)}`));
    this.ccService.popupOpen$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const link = document.getElementsByClassName("cc-politica");
      fromEvent<MouseEvent>( link, 'click').subscribe(() => this.politica.show());
    });
  }

  private getLang = () => {
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang?.match(/en|fr|pt/) ? browserLang : 'pt');
    this.translateService.addLangs(['en', 'fr', 'pt']);
    this.translateService.setDefaultLang('pt');
    this.translateService.get(environment.cookies).subscribe(data => {
      this.ccService.getConfig().content         = this.ccService.getConfig().content || {} ;
      this.ccService.getConfig().content.allow   = data['cookie.allow'];
      this.ccService.getConfig().content.deny    = data['cookie.deny'];
      this.ccService.getConfig().content.link    = data['cookie.link'];
      this.ccService.getConfig().content.href    = data['cookie.href'];
      this.ccService.getConfig().content.policy  = data['cookie.policy'];
      this.ccService.getConfig().content.header  = data['cookie.header'];
      this.ccService.getConfig().content.message = data['cookie.message'];
      this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
      this.ccService.destroy();
      this.ccService.init(this.ccService.getConfig());
    });
  }

  private dados = () => {
    this.data$ = this.util.getStatic();
    this.news.getLoja().pipe(takeUntil(this.destroy$)).subscribe();
    this.news.getRegion().pipe(takeUntil(this.destroy$)).subscribe();
  }

  private getSeo = () => {
    const data = {
      title: 'Rede Condor | Supermercado On-line | Condor.com.br',
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: 'https://www.condor.com.br/assets/images/card.jpg'
    }
    this.seo.updateTags(data);
    this.seo.addCanonical();
  }
}
