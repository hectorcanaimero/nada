import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/news.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "@core/services/data.service";
import * as i5 from "@core/services/seo.service";
import * as i6 from "@ngx-pwa/local-storage";
import * as i7 from "@angular/common";
import * as i8 from "ngx-pagination";
import * as i9 from "@sharing/product/product.component";
import * as i10 from "../../../@sharing/sem-data/sem-data.component";
function CampanhaComponent_section_0_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const campanha_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵpropertyInterpolate("alt", campanha_r3["title"]);
    i0.ɵɵproperty("src", campanha_r3["full"], i0.ɵɵsanitizeUrl);
} }
function CampanhaComponent_section_0_h2_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campanha_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(campanha_r3["title"]);
} }
function CampanhaComponent_section_0_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const campanha_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵpropertyInterpolate("alt", campanha_r3["title"]);
    i0.ɵɵproperty("src", campanha_r3["full"], i0.ɵɵsanitizeUrl);
} }
function CampanhaComponent_section_0_h2_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campanha_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", campanha_r3["title"], "");
} }
function CampanhaComponent_section_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "app-product", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", a_r13);
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
function CampanhaComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, CampanhaComponent_section_0_img_3_Template, 1, 2, "img", 5);
    i0.ɵɵtemplate(4, CampanhaComponent_section_0_h2_4_Template, 2, 1, "h2", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵtemplate(8, CampanhaComponent_section_0_img_8_Template, 1, 2, "img", 5);
    i0.ɵɵtemplate(9, CampanhaComponent_section_0_h2_9_Template, 2, 1, "h2", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 11);
    i0.ɵɵtemplate(11, CampanhaComponent_section_0_div_11_Template, 2, 1, "div", 12);
    i0.ɵɵpipe(12, "paginate");
    i0.ɵɵpipe(13, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 13);
    i0.ɵɵelementStart(15, "pagination-controls", 14);
    i0.ɵɵlistener("pageChange", function CampanhaComponent_section_0_Template_pagination_controls_pageChange_15_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.p = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campanha_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", campanha_r3["full"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !campanha_r3["full"]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", campanha_r3["full"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !campanha_r3["full"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(12, 5, i0.ɵɵpipeBind1(13, 8, ctx_r0.items), i0.ɵɵpureFunction1(10, _c0, ctx_r0.p)));
} }
function CampanhaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class CampanhaComponent {
    constructor(act, news, util, db, seo, router, storageMap) {
        this.act = act;
        this.news = news;
        this.util = util;
        this.db = db;
        this.seo = seo;
        this.router = router;
        this.storageMap = storageMap;
        this.p = 1;
        this.search = '';
        this.view = true;
        this.init = false;
        this.loja = [];
        this.menu = [];
        this.items = [];
        this.departamento = [];
        this.getCampanha = (slug) => {
            this.campanha$ = this.news.Campanha(slug).pipe(map((res) => res[0]), tap((res) => this.proccess(res)), delay(1000));
        };
        this.proccess = (res) => {
            this.setSeo(res);
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                if (res.code) {
                    this.getMenuDepartamentoCampanha(loja, res.code);
                    this.items = this.db.OfertasLojaCampanha(loja, res.code, 60);
                }
                else {
                    this.getMenuDepartamentoSlug(loja, res.slugCampanha);
                    this.items = this.db.OfertasLojaSlug(loja, res.slugCampanha, 60);
                }
            });
        };
        this.getMenuDepartamentoSlug = (loja, slug) => {
            this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaSlug?loja=${loja}&slug=${slug}`);
        };
        this.getMenuDepartamentoCampanha = (loja, campanha) => {
            this.departamento = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaCampanha?loja=${loja}&campanha=${campanha}`);
        };
        this.toogle = (str) => {
            this.str = str;
            this.view = !this.view;
        };
        this.setSeo = (item) => {
            this.seo.addCanonical();
            this.seo.updateTags({
                title: `Confira as ${item.title} | Condor.com.br`,
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getCampanha(data));
    }
}
CampanhaComponent.ɵfac = function CampanhaComponent_Factory(t) { return new (t || CampanhaComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.NewsService), i0.ɵɵdirectiveInject(i3.UtilService), i0.ɵɵdirectiveInject(i4.DataService), i0.ɵɵdirectiveInject(i5.SeoService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i6.StorageMap)); };
CampanhaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CampanhaComponent, selectors: [["app-campanha"]], decls: 4, vars: 4, consts: [["id", "departamento", "class", "py-3 py-md-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "departamento", 1, "py-3", "py-md-5"], [1, "container"], [1, "d-lg-none"], ["class", "w-100 mb-2", 3, "src", "alt", 4, "ngIf"], ["class", "b-08 text-mute text-center pb-1 border-bottom mb-3", 4, "ngIf"], [1, "row", "no-gutters", "justify-content-center"], [1, "col-12"], [1, "d-none", "d-lg-block"], ["class", "b-08 text-mute", 4, "ngIf"], [1, "row", "mt-3"], ["class", "col-6 col-md-4 col-lg-3 mb-4", 4, "ngFor", "ngForOf"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], [1, "w-100", "mb-2", 3, "src", "alt"], [1, "b-08", "text-mute", "text-center", "pb-1", "border-bottom", "mb-3"], [1, "b-08", "text-mute"], [1, "col-6", "col-md-4", "col-lg-3", "mb-4"], [3, "code"]], template: function CampanhaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CampanhaComponent_section_0_Template, 16, 12, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, CampanhaComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.campanha$))("ngIfElse", _r1);
    } }, directives: [i7.NgIf, i7.NgForOf, i8.PaginationControlsComponent, i9.ProductComponent, i10.SemDataComponent], pipes: [i7.AsyncPipe, i8.PaginatePipe], styles: ["@media(max-width: 450px) {\n    .col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%] { \n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n    .col-6[_ngcontent-%COMP%] { \n        padding-left: 5px !important;\n        padding-right: 5px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CampanhaComponent, [{
        type: Component,
        args: [{
                selector: 'app-campanha',
                templateUrl: './campanha.component.html',
                styleUrls: ['./campanha.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.NewsService }, { type: i3.UtilService }, { type: i4.DataService }, { type: i5.SeoService }, { type: i1.Router }, { type: i6.StorageMap }]; }, null); })();
//# sourceMappingURL=campanha.component.js.map