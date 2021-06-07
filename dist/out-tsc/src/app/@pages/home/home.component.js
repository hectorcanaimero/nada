import { Component } from '@angular/core';
import { map, take, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/data.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "@core/services/news.service";
import * as i5 from "@ngx-pwa/local-storage";
import * as i6 from "@angular/common";
import * as i7 from "../../@widgets/carousel/carousel.component";
import * as i8 from "../../@widgets/ofertas/ofertas.component";
import * as i9 from "../../@sharing/faixa/faixa.component";
import * as i10 from "../../@sharing/select-loja/select-loja.component";
import * as i11 from "@widgets/banners/banners.component";
import * as i12 from "../../@widgets/post/post.component";
import * as i13 from "../../@widgets/institucional/institucional.component";
import * as i14 from "../../@sharing/sem-data/sem-data.component";
function HomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section");
    i0.ɵɵelement(1, "app-carousel");
    i0.ɵɵelement(2, "app-widget-ofertas", 2);
    i0.ɵɵelement(3, "app-faixa", 3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelement(5, "app-select-loja", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "app-widget-ofertas", 2);
    i0.ɵɵelement(7, "app-banners");
    i0.ɵɵelement(8, "app-widget-ofertas", 2);
    i0.ɵɵelement(9, "app-widget-ofertas", 6);
    i0.ɵɵelement(10, "app-faixa", 7);
    i0.ɵɵelement(11, "app-widget-post");
    i0.ɵɵelement(12, "app-widget-institucional");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ofertas_r3 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("code", ofertas_r3[0].code)("title", ofertas_r3[0].titulo)("icon", ofertas_r3[0].icon)("link", ofertas_r3[0].link);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("code", ofertas_r3[1].code)("title", ofertas_r3[1].titulo)("icon", ofertas_r3[1].icon)("link", ofertas_r3[1].link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("code", ofertas_r3[2].code)("title", ofertas_r3[2].titulo)("icon", ofertas_r3[2].icon)("link", ofertas_r3[2].link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", ofertas_r3[3].code)("title", ofertas_r3[3].titulo)("icon", ofertas_r3[3].icon)("link", ofertas_r3[3].link);
} }
function HomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class HomeComponent {
    constructor(seo, db, util, news, ch, storageMap) {
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.news = news;
        this.ch = ch;
        this.storageMap = storageMap;
        this.show = true;
        this.ofertasdia = [];
        this.getLoadOfertas = () => {
            this.storageMap.watch('Loja').pipe(take(1)).subscribe((res) => {
                this.db.getOfertas(res['loja']).pipe(take(1)).subscribe();
            });
            this.ch.detectChanges();
        };
    }
    ngOnInit() {
        this.getLoadOfertas();
        this.seo.dataLayerPage('Home');
        this.news.getBanners().pipe(take(1)).subscribe();
        this.data$ = this.util.getStatic$().pipe(map((res) => res[3].data), delay(1500));
    }
    ngAfterViewInit() {
        this.getLoadOfertas();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.DataService), i0.ɵɵdirectiveInject(i3.UtilService), i0.ɵɵdirectiveInject(i4.NewsService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i5.StorageMap)); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["semData", ""], ["type", "slug", 3, "code", "title", "icon", "link"], ["type", "whats"], [1, "container", "my-2"], ["type", "alert"], ["type", "departamento", 3, "code", "title", "icon", "link"], ["type", "clube"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HomeComponent_section_0_Template, 13, 16, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, HomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.data$))("ngIfElse", _r1);
    } }, directives: [i6.NgIf, i7.CarouselComponent, i8.OfertasComponent, i9.FaixaComponent, i10.SelectLojaComponent, i11.BannersComponent, i12.PostComponent, i13.InstitucionalComponent, i14.SemDataComponent], pipes: [i6.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.DataService }, { type: i3.UtilService }, { type: i4.NewsService }, { type: i0.ChangeDetectorRef }, { type: i5.StorageMap }]; }, null); })();
//# sourceMappingURL=home.component.js.map