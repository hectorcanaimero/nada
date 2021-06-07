import { Component, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "@core/services/news.service";
import * as i5 from "./@core/services/update.service";
import * as i6 from "@ngx-pwa/local-storage";
import * as i7 from "@ngx-translate/core";
import * as i8 from "ngx-cookieconsent";
import * as i9 from "angular-google-tag-manager";
import * as i10 from "@angular/common";
import * as i11 from "angular-bootstrap-md";
import * as i12 from "./@widgets/lgpd/lgpd.component";
import * as i13 from "./@widgets/mobile/mobile.component";
import * as i14 from "./@widgets/top/top.component";
import * as i15 from "./@widgets/header/header.component";
import * as i16 from "./@widgets/menu/menu.component";
import * as i17 from "./@widgets/footer/footer.component";
const _c0 = ["politica"];
function AppComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main");
    i0.ɵɵelement(1, "app-mobile", 13);
    i0.ɵɵelement(2, "app-top", 14);
    i0.ɵɵelement(3, "app-header", 15);
    i0.ɵɵelement(4, "app-menu", 16);
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelementStart(6, "router-outlet", 18);
    i0.ɵɵlistener("activate", function AppComponent_main_0_Template_router_outlet_activate_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onActivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "app-footer", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", data_r2[0].data)("condor", data_r2[4].data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", data_r2[0].data)("json", data_r2[4].data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", data_r2[2].data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("json", data_r2[0].data);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", data_r2[1].data);
} }
export class AppComponent {
    constructor(router, seo, util, news, sw, storageMap, translateService, ccService, gtmService, platformId) {
        this.seo = seo;
        this.util = util;
        this.news = news;
        this.sw = sw;
        this.storageMap = storageMap;
        this.translateService = translateService;
        this.ccService = ccService;
        this.gtmService = gtmService;
        this.platformId = platformId;
        this.destroy$ = new Subject();
        this.setCookies = () => {
            this.getLang();
            this.popupCookies();
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
        if (isPlatformBrowser(this.platformId))
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
        // const scrollToTop = window.setInterval(() => {
        //   const pos = window.pageYOffset;
        //   if (pos > 0) window.scrollTo(0, pos - 20);
        //   else window.clearInterval(scrollToTop);
        // }, 16);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.UtilService), i0.ɵɵdirectiveInject(i4.NewsService), i0.ɵɵdirectiveInject(i5.UpdateService), i0.ɵɵdirectiveInject(i6.StorageMap), i0.ɵɵdirectiveInject(i7.TranslateService), i0.ɵɵdirectiveInject(i8.NgcCookieConsentService), i0.ɵɵdirectiveInject(i9.GoogleTagManagerService), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.politica = _t.first);
    } }, decls: 17, vars: 3, consts: [[4, "ngIf"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "overflow-auto", 2, "z-index", "100000000!important"], ["politica", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-condor"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100", "py-2"], [1, "modal-body"], [1, "overflow-y"], [1, "modal-footer"], ["type", "button", "mdbBtn", "", "color", "primary", "aria-label", "Close", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], [3, "items", "condor"], [3, "items", "json"], [3, "items"], [3, "json"], [1, "type"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵtemplate(0, AppComponent_main_0_Template, 8, 7, "main", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵelementStart(2, "div", 1, 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(3); return _r1.hide(); });
        i0.ɵɵelementStart(8, "span", 7);
        i0.ɵɵtext(9, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "h4", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵelementStart(12, "div", 10);
        i0.ɵɵelement(13, "app-lgpd");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 11);
        i0.ɵɵelementStart(15, "button", 12);
        i0.ɵɵlistener("click", function AppComponent_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(3); return _r1.hide(); });
        i0.ɵɵtext(16, "Fechar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.data$));
    } }, directives: [i10.NgIf, i11.ModalDirective, i12.LgpdComponent, i11.MdbBtnDirective, i11.WavesDirective, i13.MobileComponent, i14.TopComponent, i15.HeaderComponent, i16.MenuComponent, i1.RouterOutlet, i17.FooterComponent], pipes: [i10.AsyncPipe], styles: [".type[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n\n\n.bg-condor[_ngcontent-%COMP%] {\n  background-color: #447ab3 !important;\n  button {\n    color: #fff !important;\n  }\n}\n@media(min-width: 1024px) {\n  .type[_ngcontent-%COMP%]{\n    margin-top: 0px;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.UtilService }, { type: i4.NewsService }, { type: i5.UpdateService }, { type: i6.StorageMap }, { type: i7.TranslateService }, { type: i8.NgcCookieConsentService }, { type: i9.GoogleTagManagerService }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { politica: [{
            type: ViewChild,
            args: ['politica', { static: true }]
        }] }); })();
//# sourceMappingURL=app.component.js.map