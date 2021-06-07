import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
import * as i3 from "ngx-responsive";
import * as i4 from "../../@sharing/swipe/swipe.component";
import * as i5 from "../ofertas/ofertas.component";
function CarouselComponent_section_0_app_widget_ofertas_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-widget-ofertas", 11);
} }
function CarouselComponent_section_0_app_widget_ofertas_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-widget-ofertas", 12);
} }
const _c0 = function () { return ["xs"]; };
function CarouselComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtemplate(4, CarouselComponent_section_0_app_widget_ofertas_4_Template, 1, 0, "app-widget-ofertas", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelement(6, "app-swipe", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, CarouselComponent_section_0_app_widget_ofertas_8_Template, 1, 0, "app-widget-ofertas", 9);
    i0.ɵɵelementStart(9, "div", 6);
    i0.ɵɵelement(10, "app-swipe", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showItBootstrap", i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("data", item_r1.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showItBootstrap", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("data", item_r1.right);
} }
export class CarouselComponent {
    constructor(news) {
        this.news = news;
    }
    ngOnInit() {
        this.data$ = this.news.getBanners$().pipe(map((res) => {
            return {
                left: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-left')),
                right: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-right')),
            };
        }));
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
CarouselComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 2, vars: 3, consts: [["id", "carousel", "class", "py-0 py-md-3", 4, "ngIf"], ["id", "carousel", 1, "py-0", "py-md-3"], ["id", "banner", 1, "container"], [1, "row", "ios"], [1, "col-sm-8", "col-md-8", "col-lg-8", "mb-1"], ["code", "dia", "title", "Ofertas do dia", "icon", "fas fa-shopping-basket", "link", "/ofertas-do-dia", "type", "slug", 4, "showItBootstrap"], [1, "z-depth-1"], ["idImage", "banner-home-left", "size", "730x350", 3, "data"], [1, "col-sm-4", "col-md-4", "col-lg-4"], ["code", "geral", "title", "Mais procurados", "icon", "fas fa-shopping-basket", "link", "/ofertas-para-voce", "type", "slug", 4, "showItBootstrap"], ["idImage", "banner-home-right", "size", "350x350", 3, "data"], ["code", "dia", "title", "Ofertas do dia", "icon", "fas fa-shopping-basket", "link", "/ofertas-do-dia", "type", "slug"], ["code", "geral", "title", "Mais procurados", "icon", "fas fa-shopping-basket", "link", "/ofertas-para-voce", "type", "slug"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CarouselComponent_section_0_Template, 11, 6, "section", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.data$));
    } }, directives: [i2.NgIf, i3.ShowItBootstrapDirective, i4.SwipeComponent, i5.OfertasComponent], pipes: [i2.AsyncPipe], styles: ["@media(max-width: 767px) and (orientation: landscape) {\n    #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] { \n        min-width: 100% !important;\n    }\n}\n\n\n@media(max-width: 450px) {\n    #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%] { \n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=carousel.component.js.map