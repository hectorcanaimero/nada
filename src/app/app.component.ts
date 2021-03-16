import { StorageMap } from '@ngx-pwa/local-storage';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';

import { SeoService } from './shared/services/seo.service';
import { UtilService } from './shared/services/util.service';
import { UpdateService } from './shared/services/updateService';
import { ApiService } from 'src/app/shared/services/api.service';
import { NewsService } from 'src/app/shared/services/news.service';

import { Subscription, Observable } from 'rxjs';
import { Static } from './shared/services/interfaces/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  data$: Observable<Static[]>;
  title = 'reload';
  show: boolean = true;
  skeleton: boolean = true;
  init: boolean = false;

  @ViewChild('politica', { static: true }) public politica: any;
  @ViewChild('regras', { static: true }) public regras: any;

  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private noCookieLawSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;

  constructor(
    router: Router,
    sw: UpdateService,
    private api: ApiService,
    private util: UtilService,
    private news: NewsService,
    private seo: SeoService,
    private storageMap: StorageMap,
    // private translateService:TranslateService,
    // private ccService: NgcCookieConsentService,
    private gtmService: GoogleTagManagerService
  ) {
    sw.checkForUpdates();
    // if (!util.StorageParse('Loja')) {
    //   this.init = true;
    // }
    router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = { event: 'page', pageName: item.url };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
  ngOnInit(): void {
    this.show = true;
    this.getSeo();
    this.setCookies();
    this.data$ = this.util.getStatic();
    this.news.getLoja().subscribe(res => res);
    this.news.getRegion().subscribe(res => res);
  }

  ngAfterViewInit() {
    this.storageMap.has('Loja').subscribe(res => { if (res === false) this.init = true; });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.popupOpenSubscription.unsubscribe();
    // this.popupCloseSubscription.unsubscribe();
    // this.initializeSubscription.unsubscribe();
    // this.statusChangeSubscription.unsubscribe();
    // this.revokeChoiceSubscription.unsubscribe();
    // this.noCookieLawSubscription.unsubscribe();
  }

  getSeo = () => {
    const data = {
      title: 'Rede Condor | Supermercado On-line | Condor.com.br',
      description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
      image: 'https://www.condor.com.br/assets/images/card.jpg'
    }
    this.seo.updateTags(
      {
        title: data.title,
        description: data.description,
        image: data.image
      }
    );
    this.seo.addCanonical();
  }

  onActivate(event: any) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) window.scrollTo(0, pos - 20);
      else window.clearInterval(scrollToTop);

    }, 16);
  }


  setCookies = () => {
    // this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {
    //   console.log('popupOpen');
    //   const link = document.getElementsByClassName("cc-politica");
    //   const src = fromEvent<MouseEvent>( link, 'click');
    //   src.subscribe(() => this.politica.show());
    //   const regras = document.getElementsByClassName("cc-regras");
    //   const srcRegras = fromEvent<MouseEvent>( regras, 'click');
    //   srcRegras.subscribe(() => this.regras.show());
    // });
    // this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => console.log('popuClose'));
    // this.initializeSubscription = this.ccService.initialize$.subscribe((event: NgcInitializeEvent) => console.log(`initialize: ${JSON.stringify(event)}`));
    // this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => console.log(`statusChange: ${JSON.stringify(event)}`));
    // this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => console.log(`revokeChoice`));
    // this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe((event: NgcNoCookieLawEvent) => console.log(`noCookieLaw: ${JSON.stringify(event)}`));
    // // (Optional) support for translated cookies messages
    // this.translateService.addLangs(['en', 'fr', 'pt']);
    // this.translateService.setDefaultLang('pt');
    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang.match(/en|fr|pt/) ? browserLang : 'pt');
    // this.translateService.get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy', 'cookie.href'])
    // .subscribe(data => {
    //   console.log(data);
    //   this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
    //   this.ccService.getConfig().content.header = data['cookie.header'];
    //   this.ccService.getConfig().content.message = data['cookie.message'];
    //   this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
    //   this.ccService.getConfig().content.allow = data['cookie.allow'];
    //   this.ccService.getConfig().content.deny = data['cookie.deny'];
    //   this.ccService.getConfig().content.link = data['cookie.link'];
    //   this.ccService.getConfig().content.href = data['cookie.href'];
    //   this.ccService.getConfig().content.policy = data['cookie.policy'];
    //   this.ccService.destroy();//remove previous cookie bar (with default messages)
    //   this.ccService.init(this.ccService.getConfig()); // update config with translated messages
    // });
  }
}
