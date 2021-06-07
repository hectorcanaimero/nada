import { Component } from '@angular/core';
import { map, tap, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/data.service";
import * as i3 from "@core/services/seo.service";
import * as i4 from "@core/services/util.service";
import * as i5 from "@ngx-pwa/local-storage";
import * as i6 from "@angular/common";
import * as i7 from "angular-bootstrap-md";
import * as i8 from "../../../@sharing/select-loja/select-loja.component";
import * as i9 from "ngx-pagination";
import * as i10 from "@sharing/product/product.component";
import * as i11 from "../../../@sharing/sem-data/sem-data.component";
import * as i12 from "../../../@core/pipes/filtro.pipe";
const _c0 = function (a1, a3) { return ["/departamento", a1, "setor", a3]; };
function SectorComponent_section_0_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 25);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, ctx_r6.url.link, n_r7.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", n_r7.sector, " ");
} }
function SectorComponent_section_0_ul_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 23);
    i0.ɵɵtemplate(1, SectorComponent_section_0_ul_16_li_1_Template, 3, 5, "li", 24);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r4.sector$));
} }
function SectorComponent_section_0_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelement(1, "app-product", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", item_r8);
} }
const _c1 = function (a1) { return ["/departamento", a1]; };
const _c2 = function (a0, a1) { return { "fa-plus": a0, "fa-minus": a1 }; };
const _c3 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function SectorComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "mdb-breadcrumb", 4);
    i0.ɵɵelementStart(3, "mdb-breadcrumb-item", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mdb-breadcrumb-item", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelement(9, "app-select-loja", 9);
    i0.ɵɵelementStart(10, "h5", 10);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 11);
    i0.ɵɵelementStart(13, "h5", 12);
    i0.ɵɵlistener("click", function SectorComponent_section_0_Template_h5_click_13_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.toogle(); });
    i0.ɵɵtext(14, " Setor ");
    i0.ɵɵelement(15, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, SectorComponent_section_0_ul_16_Template, 3, 3, "ul", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 15);
    i0.ɵɵelementStart(18, "h1", 16);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "img", 17);
    i0.ɵɵelementStart(21, "input", 18);
    i0.ɵɵlistener("change", function SectorComponent_section_0_Template_input_change_21_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.busca($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 19);
    i0.ɵɵtemplate(23, SectorComponent_section_0_div_23_Template, 2, 1, "div", 20);
    i0.ɵɵpipe(24, "paginate");
    i0.ɵɵpipe(25, "filtro");
    i0.ɵɵpipe(26, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 21);
    i0.ɵɵelementStart(28, "pagination-controls", 22);
    i0.ɵɵlistener("pageChange", function SectorComponent_section_0_Template_pagination_controls_pageChange_28_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.p = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const path_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(17, _c1, ctx_r0.url.link));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.url.nome, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", path_r3["nome"], " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.url.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(19, _c2, !ctx_r0.viewSector, ctx_r0.viewSector));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.viewSector);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(path_r3["nome"]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(24, 8, i0.ɵɵpipeBind3(25, 11, i0.ɵɵpipeBind1(26, 15, ctx_r0.items$), ctx_r0.search, "dsc_produto"), i0.ɵɵpureFunction1(22, _c3, ctx_r0.p)));
} }
function SectorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class SectorComponent {
    constructor(router, db, seo, util, act, storageMap) {
        this.router = router;
        this.db = db;
        this.seo = seo;
        this.util = util;
        this.act = act;
        this.storageMap = storageMap;
        this.p = 1;
        this.search = '';
        this.viewDepart = true;
        this.viewSector = true;
        this.init = false;
        this.url = [];
        this.menu = [];
        this.proccess = (slug) => {
            this.seo.addCanonical();
            this.getSector(slug);
        };
        this.getSector = (slug) => {
            this.url = { nome: this.router.url.split('/')[2], link: this.util.toSlug(this.router.url.split('/')[2]) };
            this.menuSector$ = this.db.getMenuOfertas(`menuSetorSlug?slug=${slug}`).pipe(map((res) => res[0]), tap(({ dep_id, codigo }) => this.watchStorage(dep_id, codigo), debounceTime(1000)));
        };
        this.watchStorage = (depId, codigo) => {
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                this.getMenuDepartamento(loja);
                this.sector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${depId}`);
                this.items$ = this.db.OfertasLojaDepartamentoSetor(loja, depId, codigo).pipe(map((data) => data.filter((row) => row.produtos)));
            });
        };
        this.getMenuDepartamento = (loja) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);
        this.toogle = () => this.viewSector = !this.viewSector;
        this.busca = (e) => this.search = e.target.value;
        this.Seo = (title) => {
            this.seo.addCanonical();
            this.seo.setTitle(`${title} | Rede Condor`);
            this.seo.updateTagName(`${title} | Rede Condor`);
            this.seo.dataLayerPage(title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.proccess(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SectorComponent.ɵfac = function SectorComponent_Factory(t) { return new (t || SectorComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DataService), i0.ɵɵdirectiveInject(i3.SeoService), i0.ɵɵdirectiveInject(i4.UtilService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i5.StorageMap)); };
SectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectorComponent, selectors: [["app-sector"]], decls: 4, vars: 4, consts: [["id", "sector", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "sector", 1, "py-5"], [1, "container"], [1, "mb-5"], [1, "blue-text", "text-uppercase", 3, "routerLink"], [1, "text-muted", "text-uppercase"], [1, "row", "ios", "justify-content-center"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["type", "alert"], [1, "border-bottom", "pb-1", "b-06", "my-4", "text-capitalize"], [1, "news", "my-4"], [1, "b-07", "border-bottom", "pb-1", "mb-1", 3, "click"], [1, "fas", "float-right", 3, "ngClass"], ["class", "nav flex-column grey lighten-4 py-2 animated fadeIn faster", "data-wow-delay", ".1", 4, "ngIf"], [1, "col-lg-8", "col-xl-9"], [1, "b-08", "border-bottom", "pb-1", "mb-3", "text-capitalize"], ["src", "./assets/images/banner_campanha.jpg", "onerror", "this.style.display='none'", 1, "img-fluid", "mb-4"], ["type", "text", "placeholder", "Procure produtos deste setor", 1, "form-control", 3, "change"], [1, "row", "mt-3"], ["class", "col-6 col-md-4 col-lg-4 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], ["data-wow-delay", ".1", 1, "nav", "flex-column", "grey", "lighten-4", "py-2", "animated", "fadeIn", "faster"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", "b-07", "f-09", 3, "routerLink"], [1, "col-6", "col-md-4", "col-lg-4", "col-xl-4", "mb-3"], [3, "code"]], template: function SectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SectorComponent_section_0_Template, 29, 24, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, SectorComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.menuSector$))("ngIfElse", _r1);
    } }, directives: [i6.NgIf, i7.MdbBreadcrumbComponent, i7.MdbBreadcrumbItemComponent, i1.RouterLink, i8.SelectLojaComponent, i6.NgClass, i6.NgForOf, i9.PaginationControlsComponent, i1.RouterLinkActive, i1.RouterLinkWithHref, i10.ProductComponent, i11.SemDataComponent], pipes: [i6.AsyncPipe, i9.PaginatePipe, i12.FiltroPipe], styles: ["@media(max-width: 450px) {\n    .col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%] { \n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n    .col-6[_ngcontent-%COMP%] { \n        padding-left: 5px !important;\n        padding-right: 5px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectorComponent, [{
        type: Component,
        args: [{
                selector: 'app-sector',
                templateUrl: './sector.component.html',
                styleUrls: ['./sector.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.DataService }, { type: i3.SeoService }, { type: i4.UtilService }, { type: i1.ActivatedRoute }, { type: i5.StorageMap }]; }, null); })();
//# sourceMappingURL=sector.component.js.map