import { Component, Input } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import SwiperCore, { EffectFade, Navigation, Pagination, A11y, Lazy } from "swiper/core";
import * as i0 from "@angular/core";
import * as i1 from "@core/services/data.service";
import * as i2 from "@ngx-pwa/local-storage";
import * as i3 from "@angular/common";
import * as i4 from "../../@sharing/titulo/titulo.component";
import * as i5 from "swiper/angular";
import * as i6 from "@sharing/product/product.component";
function OfertasComponent_section_0_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-product", 7);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("code", item_r4)("loja", ctx_r5.loja);
} }
function OfertasComponent_section_0_div_1_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OfertasComponent_section_0_div_1_3_ng_template_0_Template, 1, 2, "ng-template", 6);
} }
function OfertasComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "app-titulo", 3);
    i0.ɵɵelementStart(2, "swiper", 4);
    i0.ɵɵtemplate(3, OfertasComponent_section_0_div_1_3_Template, 1, 0, undefined, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("titulo", ctx_r2.title)("icon", ctx_r2.icon)("link", ctx_r2.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("lazy", true)("config", ctx_r2.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", items_r1);
} }
function OfertasComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section");
    i0.ɵɵtemplate(1, OfertasComponent_section_0_div_1_Template, 4, 6, "div", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.total > 0);
} }
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);
export class OfertasComponent {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        // titulo
        this.icon = '';
        this.link = '';
        this.title = '';
        this.loja = [];
        this.total = 0;
        this.options = {
            freeMode: true,
            spaceBetween: 15,
            grabCursor: true,
            slidesPerView: 1.5,
            type: 'progressbar',
            loop: true,
            autoplay: { delay: 1800 },
            breakpoints: {
                360: { slidesPerView: 2 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
                1200: { slidesPerView: 5 },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        this.getOfertas = (code) => {
            let result = [];
            this.items$ = this.db.getOfertas$().pipe(map((res) => {
                if (this.type === 'slug')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.slug === code));
                else if (this.type === 'campanha')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.campanha === code));
                else if (this.type === 'departamento')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.departamento === code));
                return result === null || result === void 0 ? void 0 : result.slice(0, 15);
            }), tap((res) => this.total = res.length));
        };
    }
    ngOnInit() {
        this.getOfertas(this.code);
        this.storage.get('Loja').subscribe((res) => this.loja = res);
    }
}
OfertasComponent.ɵfac = function OfertasComponent_Factory(t) { return new (t || OfertasComponent)(i0.ɵɵdirectiveInject(i1.DataService), i0.ɵɵdirectiveInject(i2.StorageMap)); };
OfertasComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OfertasComponent, selectors: [["app-widget-ofertas"]], inputs: { icon: "icon", link: "link", title: "title", code: "code", type: "type", sector: "sector" }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "titulo", "icon", "link"], [3, "lazy", "config"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [3, "code", "loja"]], template: function OfertasComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, OfertasComponent_section_0_Template, 2, 1, "section", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items$));
    } }, directives: [i3.NgIf, i4.TituloComponent, i5.SwiperComponent, i3.NgForOf, i5.SwiperSlideDirective, i6.ProductComponent], pipes: [i3.AsyncPipe], styles: ["section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 2rem 0 !important;\n\n}\n\n.titulo-black[_ngcontent-%COMP%]{\n  color: var(--color-red-primary) !important;\n  a{ color: var(--color-red-primary) !important; }\n}\n\n.bg-black[_ngcontent-%COMP%] {\n    background: var(--color-blue-primary);\n}\n\n\n@media(max-width: 767px) and (orientation: landscape) {\n    #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n        min-width: 100% !important;\n    }\n}\n\n\n\n@media(max-width: 450px) {\n    .titulo-black[_ngcontent-%COMP%]{ font-size: 1.5rem; padding: 0 15px; }\n}\n\n@media(max-width: 375px) {\n    .titulo-black[_ngcontent-%COMP%]{ font-size: 1.3rem; }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfertasComponent, [{
        type: Component,
        args: [{
                selector: 'app-widget-ofertas',
                templateUrl: './ofertas.component.html',
                styleUrls: ['./ofertas.component.scss'],
            }]
    }], function () { return [{ type: i1.DataService }, { type: i2.StorageMap }]; }, { icon: [{
            type: Input
        }], link: [{
            type: Input
        }], title: [{
            type: Input
        }], code: [{
            type: Input
        }], type: [{
            type: Input
        }], sector: [{
            type: Input
        }] }); })();
//# sourceMappingURL=ofertas.component.js.map