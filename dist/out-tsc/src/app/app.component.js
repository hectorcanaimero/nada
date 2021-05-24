import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
let AppComponent = class AppComponent {
    constructor(router, seo, util, news, sw, storageMap, translateService, ccService, gtmService) {
        this.seo = seo;
        this.util = util;
        this.news = news;
        this.sw = sw;
        this.storageMap = storageMap;
        this.translateService = translateService;
        this.ccService = ccService;
        this.gtmService = gtmService;
        this.destroy$ = new Subject();
        this.setCookies = () => {
            // this.getLang();
            // this.popupCookies();
        };
        this.popupCookies = () => {
            this.ccService.initialize$.subscribe((event) => console.log(`initialize: ${JSON.stringify(event)}`));
            this.ccService.popupOpen$.pipe(takeUntil(this.destroy$)).subscribe(() => {
                const link = document.getElementsByClassName("cc-politica");
                fromEvent(link, 'click').subscribe(() => this.politica.show());
            });
        };
        this.getLang = () => {
            const browserLang = this.translateService.getBrowserLang();
            this.translateService.use((browserLang === null || browserLang === void 0 ? void 0 : browserLang.match(/en|fr|pt/)) ? browserLang : 'pt');
            this.translateService.addLangs(['en', 'fr', 'pt']);
            this.translateService.setDefaultLang('pt');
            this.translateService.get(environment.cookies).subscribe(data => {
                this.ccService.getConfig().content = this.ccService.getConfig().content || {};
                this.ccService.getConfig().content.allow = data['cookie.allow'];
                this.ccService.getConfig().content.deny = data['cookie.deny'];
                this.ccService.getConfig().content.link = data['cookie.link'];
                this.ccService.getConfig().content.href = data['cookie.href'];
                this.ccService.getConfig().content.policy = data['cookie.policy'];
                this.ccService.getConfig().content.header = data['cookie.header'];
                this.ccService.getConfig().content.message = data['cookie.message'];
                this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
                this.ccService.destroy();
                this.ccService.init(this.ccService.getConfig());
            });
        };
        this.dados = () => {
            this.data$ = this.util.getStatic();
            this.news.getLoja().pipe(takeUntil(this.destroy$)).subscribe();
            this.news.getRegion().pipe(takeUntil(this.destroy$)).subscribe();
        };
        this.getSeo = () => {
            const data = {
                title: 'Rede Condor | Supermercado On-line | Condor.com.br',
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/card.jpg'
            };
            this.seo.updateTags(data);
            this.seo.addCanonical();
        };
        router.events.forEach((item) => {
            if (item instanceof NavigationEnd) {
                this.gtmService.pushTag({ event: 'page', pageName: item.url });
            }
        });
        sw.checkForUpdates();
    }
    ngOnInit() {
        this.dados();
        this.getSeo();
        this.setCookies();
    }
    ngAfterViewInit() {
        this.storageMap.has('Loja').subscribe(res => {
            if (res === false) {
                this.storageMap.set('Loja', environment.loja).subscribe(() => { });
            }
        });
    }
    onActivate(event) {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0)
                window.scrollTo(0, pos - 20);
            else
                window.clearInterval(scrollToTop);
        }, 16);
    }
};
__decorate([
    ViewChild('politica', { static: true })
], AppComponent.prototype, "politica", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map