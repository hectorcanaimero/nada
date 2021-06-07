import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import { slideDownInOut } from '@core/animations/slide';
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
function DepartamentoComponent_section_0_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵelementStart(2, "a", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const departamento_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, departamento_r3.slug, s_r6.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", s_r6.sector, " ");
} }
function DepartamentoComponent_section_0_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelement(1, "app-product", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("code", item_r8);
} }
const _c1 = function (a1) { return ["/departamento", a1]; };
const _c2 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
function DepartamentoComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "mdb-breadcrumb", 4);
    i0.ɵɵelementStart(3, "mdb-breadcrumb-item", 5);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelement(10, "app-select-loja", 9);
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelementStart(12, "h6", 11);
    i0.ɵɵlistener("click", function DepartamentoComponent_section_0_Template_h6_click_12_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toogleSector(); });
    i0.ɵɵtext(13);
    i0.ɵɵelement(14, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 13);
    i0.ɵɵelementStart(16, "div", 14);
    i0.ɵɵtemplate(17, DepartamentoComponent_section_0_div_17_Template, 4, 5, "div", 15);
    i0.ɵɵpipe(18, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 16);
    i0.ɵɵelementStart(20, "div", 17);
    i0.ɵɵelementStart(21, "div", 18);
    i0.ɵɵelement(22, "img", 19);
    i0.ɵɵtemplate(23, DepartamentoComponent_section_0_div_23_Template, 2, 1, "div", 20);
    i0.ɵɵpipe(24, "paginate");
    i0.ɵɵpipe(25, "filtro");
    i0.ɵɵpipe(26, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 21);
    i0.ɵɵelementStart(28, "pagination-controls", 22);
    i0.ɵɵlistener("pageChange", function DepartamentoComponent_section_0_Template_pagination_controls_pageChange_28_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.p = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const departamento_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(23, _c1, i0.ɵɵpipeBind1(4, 10, ctx_r0.slug$)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(departamento_r3.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(departamento_r3.nome);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", departamento_r3.nome, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.viewSector ? "fa-plus" : "fa-minus");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@slideDownInOut", ctx_r0.viewSector);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(18, 12, ctx_r0.menuSector$))("ngForTrackBy", ctx_r0.trackById);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(24, 14, i0.ɵɵpipeBind3(25, 17, i0.ɵɵpipeBind1(26, 21, ctx_r0.items$), ctx_r0.search, "dsc_produto"), i0.ɵɵpureFunction1(25, _c2, ctx_r0.p)))("ngForTrackBy", ctx_r0.trackById);
} }
function DepartamentoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class DepartamentoComponent {
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
        this.viewSector = 'out';
        this.init = false;
        this.loja = [];
        this.menu = [];
        this.getDepartamento = (slug) => {
            console.log(slug);
            this.menuDepartamento$ = this.db.getMenuOfertas(`menuDepartamentoSlug?slug=${slug}`).pipe(map((res) => res[0]), tap(({ nome, codigo }) => this.proccess(nome, codigo)), delay(1000));
        };
        this.proccess = (nome, codigo) => {
            this.getSeo(nome);
            this.getData(codigo);
        };
        this.getData = (codigo) => {
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                this.menuSector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${codigo}`);
                this.items$ = this.db.OfertasLojaDepartamento(loja, codigo);
            });
        };
        this.getMenuDepartamento = (loja) => this.menu = this.db.getCollection(`/Menus/MenuDepartamentoOfertasLojaDepartamento?loja=${loja}`);
        this.onSearch = (e) => console.log(e.target.value);
        this.toogleSector = () => this.viewSector = this.viewSector === 'out' ? 'in' : 'out';
        this.toogleDepart = () => this.viewDepart = !this.viewDepart;
        this.getSeo = (departamento) => {
            this.seo.updateTags({
                title: `Confira as Ofertas de ${departamento} | Condor.com.br`,
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.addCanonical();
            this.seo.dataLayerPage(departamento);
        };
        this.trackById = (index, items) => items[index];
    }
    ngOnInit() {
        this.seo.addCanonical();
        this.loja = this.util.StorageParse('Loja');
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getDepartamento(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ;
}
DepartamentoComponent.ɵfac = function DepartamentoComponent_Factory(t) { return new (t || DepartamentoComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DataService), i0.ɵɵdirectiveInject(i3.SeoService), i0.ɵɵdirectiveInject(i4.UtilService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i5.StorageMap)); };
DepartamentoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DepartamentoComponent, selectors: [["app-departamento"]], decls: 4, vars: 4, consts: [["id", "departamento", "class", "py-3 py-md-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "departamento", 1, "py-3", "py-md-5"], [1, "container"], [1, "mb-5"], [1, "blue-text", "text-uppercase", "d-none", "d-md-block", 3, "routerLink"], [1, "b-08", "border-bottom", "pb-1", "mb-3", "title"], [1, "row", "mobile", "ios", "justify-content-center"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["type", "alert"], [1, "news", "my-4"], [1, "b-07", "border-bottom", "pb-1", "mb-1", 3, "click"], [1, "fas", "float-right", 3, "ngClass"], [1, "sector"], [1, "row", "no-gutters"], ["class", "col-6 col-md-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-8", "col-xl-9"], [1, "mobile"], [1, "row", "mt-3"], ["src", "./assets/images/banner_campanha.jpg", "onerror", "this.style.display='none'", 1, "img-fluid", "mb-4"], ["class", "col-6 col-md-4 mb-3 mb-xl-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], [1, "col-6", "col-md-12"], [1, "text", 3, "routerLink"], [1, "col-6", "col-md-4", "mb-3", "mb-xl-4"], [3, "code"]], template: function DepartamentoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DepartamentoComponent_section_0_Template, 29, 27, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, DepartamentoComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.menuDepartamento$))("ngIfElse", _r1);
    } }, directives: [i6.NgIf, i7.MdbBreadcrumbComponent, i7.MdbBreadcrumbItemComponent, i1.RouterLink, i8.SelectLojaComponent, i6.NgClass, i6.NgForOf, i9.PaginationControlsComponent, i1.RouterLinkWithHref, i10.ProductComponent, i11.SemDataComponent], pipes: [i6.AsyncPipe, i9.PaginatePipe, i12.FiltroPipe], styles: [".sector[_ngcontent-%COMP%] {\n  .row {\n    div {\n      p{\n        padding: .5rem 0;\n        border-bottom: .5px solid #a7a7a7;\n        margin: 0 .15rem .20rem;\n        a{\n          color: var(--color-default--text);\n          font-size: .8rem;\n        }\n      }\n    }\n  }\n}\n\n@media(min-width: 768px) {\n  .sector[_ngcontent-%COMP%] {\n    .row {\n      div {\n        p{\n          padding: .35rem 0;\n          a{ font-size: 1rem; }\n        }\n      }\n    }\n  }\n}\n\n\n@media(max-width: 450px) {\n  .mobile[_ngcontent-%COMP%] {\n    .col-lg-8, .col-xl-9 {\n      padding-left: 0px !important;\n      padding-right: 0px !important;\n    }\n    .col-6 {\n      padding-left: 5px !important;\n      padding-right: 5px !important;\n    }\n  }\n}"], data: { animation: [slideDownInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DepartamentoComponent, [{
        type: Component,
        args: [{
                selector: 'app-departamento',
                templateUrl: './departamento.component.html',
                styleUrls: ['./departamento.component.scss'],
                animations: [slideDownInOut]
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.DataService }, { type: i3.SeoService }, { type: i4.UtilService }, { type: i1.ActivatedRoute }, { type: i5.StorageMap }]; }, null); })();
//# sourceMappingURL=departamento.component.js.map