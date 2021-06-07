import { Component } from '@angular/core';
import { debounceTime, map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
import * as i3 from "angular-bootstrap-md";
import * as i4 from "../../@sharing/image/image.component";
function BannersComponent_section_0_mdb_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-carousel-item");
    i0.ɵɵelement(1, "app-image", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", l_r6);
} }
function BannersComponent_section_0_mdb_carousel_item_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-carousel-item");
    i0.ɵɵelement(1, "app-image", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", c_r7);
} }
function BannersComponent_section_0_mdb_carousel_item_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-carousel-item");
    i0.ɵɵelement(1, "app-image", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", r_r8);
} }
function BannersComponent_section_0_mdb_carousel_item_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mdb-carousel-item");
    i0.ɵɵelement(1, "app-image", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", m_r9);
} }
function BannersComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "mdb-carousel", 5);
    i0.ɵɵtemplate(5, BannersComponent_section_0_mdb_carousel_item_5_Template, 2, 1, "mdb-carousel-item", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementStart(7, "mdb-carousel", 5);
    i0.ɵɵtemplate(8, BannersComponent_section_0_mdb_carousel_item_8_Template, 2, 1, "mdb-carousel-item", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelementStart(10, "mdb-carousel", 5);
    i0.ɵɵtemplate(11, BannersComponent_section_0_mdb_carousel_item_11_Template, 2, 1, "mdb-carousel-item", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 8);
    i0.ɵɵelementStart(13, "div", 9);
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵelementStart(15, "mdb-carousel", 5);
    i0.ɵɵtemplate(16, BannersComponent_section_0_mdb_carousel_item_16_Template, 2, 1, "mdb-carousel-item", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const banner_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("interval", 2050)("animation", "fade")("isControls", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", banner_r1.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("interval", 2050)("animation", "fade")("isControls", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", banner_r1.center);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("interval", 2050)("animation", "fade")("isControls", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", banner_r1.right);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("interval", 3500)("animation", "false")("isControls", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.mobile);
} }
export class BannersComponent {
    constructor(news) {
        this.news = news;
        this.mobile = [];
    }
    ngOnInit() {
        this.getImage();
    }
    getImage() {
        this.items = this.news.getBanners$().pipe(debounceTime(500), map((res) => {
            return {
                left: res.filter((rows) => rows.position === 'middle-left'),
                center: res.filter((rows) => rows.position === 'middle-center'),
                right: res.filter((rows) => rows.position === 'middle-right')
            };
        }), tap((res) => {
            this.mobile.push(res.left[0]);
            this.mobile.push(res.center[0]);
            this.mobile.push(res.right[0]);
        }));
    }
}
BannersComponent.ɵfac = function BannersComponent_Factory(t) { return new (t || BannersComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
BannersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BannersComponent, selectors: [["app-banners"]], decls: 2, vars: 3, consts: [["id", "bannerTres", "class", "py-3 py-md-0", 4, "ngIf"], ["id", "bannerTres", 1, "py-3", "py-md-0"], [1, "container", "d-none", "d-md-block"], [1, "row", "ios"], [1, "col-sm-4", "ol-md-4", "mb-1"], [1, "carousel", "slide", "carousel-fade", "z-depth-1", 3, "interval", "animation", "isControls"], [4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-md-4", "mb-1"], [1, "container", "d-md-none"], [1, "row"], [1, "col-12"], ["idImage", "banner-middle-left", 3, "code"], ["idImage", "banner-middle-center", 3, "code"], ["idImage", "banner-middle-right", 3, "code"], ["idImage", "banner-X", 3, "code"]], template: function BannersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BannersComponent_section_0_Template, 17, 16, "section", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items));
    } }, directives: [i2.NgIf, i3.CarouselComponent, i2.NgForOf, i3.SlideComponent, i4.ImageComponent], pipes: [i2.AsyncPipe], styles: [".rotativo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  font-size: .8rem;\n  margin: .75rem 0 .5rem 0;\n}\n\n@media(max-width: 768px) {\n  .rotativo[_ngcontent-%COMP%] {\n      font-size: .7rem;\n      padding: 0 10px;\n  }\n}\n\n\n@media(max-width: 576px) {\n  .col-lg-8[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%]{\n      padding-left: 0px;\n      padding-right: 0px;\n  }\n\n  .container[_ngcontent-%COMP%]{\n      width: 100% !important;\n      padding-right: 0px !important;\n      padding-left: 0px !important;\n  }\n  .rotativo[_ngcontent-%COMP%] {\n      font-size: .7rem;\n      padding: 0 10px;\n  }\n}\n\n\n@media(max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] { \n      min-width: 100% !important;\n  }\n}\n\n\n@media(max-width: 450px) {\n  #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%] { \n      padding-left: 0px !important;\n      padding-right: 0px !important;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BannersComponent, [{
        type: Component,
        args: [{
                selector: 'app-banners',
                templateUrl: './banners.component.html',
                styleUrls: ['./banners.component.scss'],
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=banners.component.js.map