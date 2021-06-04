(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sector-sector-module"],{

/***/ "2/R4":
/*!***********************************************************!*\
  !*** ./src/app/@pages/ofertas/sector/sector.component.ts ***!
  \***********************************************************/
/*! exports provided: SectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorComponent", function() { return SectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@sharing/select-loja/select-loja.component */ "sCWG");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sharing/product/product.component */ "YXfc");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@sharing/sem-data/sem-data.component */ "q3cj");
/* harmony import */ var _core_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@core/pipes/filtro.pipe */ "m8Mh");















const _c0 = function (a1, a3) { return ["/departamento", a1, "setor", a3]; };
function SectorComponent_section_0_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r6.url.link, n_r7.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r7.sector, " ");
} }
function SectorComponent_section_0_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectorComponent_section_0_ul_16_li_1_Template, 3, 5, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.sector$));
} }
function SectorComponent_section_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", item_r8);
} }
const _c1 = function (a1) { return ["/departamento", a1]; };
const _c2 = function (a0, a1) { return { "fa-plus": a0, "fa-minus": a1 }; };
const _c3 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function SectorComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-breadcrumb", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-breadcrumb-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-breadcrumb-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-select-loja", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectorComponent_section_0_Template_h5_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Setor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SectorComponent_section_0_ul_16_Template, 3, 3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SectorComponent_section_0_Template_input_change_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.busca($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SectorComponent_section_0_div_23_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pagination-controls", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SectorComponent_section_0_Template_pagination_controls_pageChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r0.url.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.url.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", path_r3["nome"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.url.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c2, !ctx_r0.viewSector, ctx_r0.viewSector));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewSector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r3["nome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 15, ctx_r0.items$), ctx_r0.search, "dsc_produto"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx_r0.p)));
} }
function SectorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class SectorComponent {
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
            this.menuSector$ = this.db.getMenuOfertas(`menuSetorSlug?slug=${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ dep_id, codigo }) => this.watchStorage(dep_id, codigo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000)));
        };
        this.watchStorage = (depId, codigo) => {
            this.storageMap.watch('Loja').subscribe(({ loja }) => {
                this.getMenuDepartamento(loja);
                this.sector$ = this.db.getCollection(`/Menus/MenuSectorOfertasLojaDepartamento?loja=${loja}&departamento=${depId}`);
                this.items$ = this.db.OfertasLojaDepartamentoSetor(loja, depId, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.filter((row) => row.produtos)));
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
        this.slug$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.proccess(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
SectorComponent.ɵfac = function SectorComponent_Factory(t) { return new (t || SectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"])); };
SectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectorComponent, selectors: [["app-sector"]], decls: 4, vars: 4, consts: [["id", "sector", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "sector", 1, "py-5"], [1, "container"], [1, "mb-5"], [1, "blue-text", "text-uppercase", 3, "routerLink"], [1, "text-muted", "text-uppercase"], [1, "row", "ios", "justify-content-center"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["type", "alert"], [1, "border-bottom", "pb-1", "b-06", "my-4", "text-capitalize"], [1, "news", "my-4"], [1, "b-07", "border-bottom", "pb-1", "mb-1", 3, "click"], [1, "fas", "float-right", 3, "ngClass"], ["class", "nav flex-column grey lighten-4 py-2 animated fadeIn faster", "data-wow-delay", ".1", 4, "ngIf"], [1, "col-lg-8", "col-xl-9"], [1, "b-08", "border-bottom", "pb-1", "mb-3", "text-capitalize"], ["src", "./assets/images/banner_campanha.jpg", "onerror", "this.style.display='none'", 1, "img-fluid", "mb-4"], ["type", "text", "placeholder", "Procure produtos deste setor", 1, "form-control", 3, "change"], [1, "row", "mt-3"], ["class", "col-6 col-md-4 col-lg-4 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], ["data-wow-delay", ".1", 1, "nav", "flex-column", "grey", "lighten-4", "py-2", "animated", "fadeIn", "faster"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", "b-07", "f-09", 3, "routerLink"], [1, "col-6", "col-md-4", "col-lg-4", "col-xl-4", "mb-3"], [3, "code"]], template: function SectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectorComponent_section_0_Template, 29, 24, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectorComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.menuSector$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbBreadcrumbComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MdbBreadcrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_9__["SelectLojaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_12__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _core_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_13__["FiltroPipe"]], styles: ["@media (max-width: 450px) {\n  .col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .col-6[_ngcontent-%COMP%] {\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL29mZXJ0YXMvc2VjdG9yL3NlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSw2QkFBQTtFQUNOOztFQUNFO0lBQ0ksNEJBQUE7SUFDQSw2QkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9AcGFnZXMvb2ZlcnRhcy9zZWN0b3Ivc2VjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuY29sLWxnLTgsIC5jb2wteGwtOSB7IFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbC02IHsgXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sector',
                templateUrl: './sector.component.html',
                styleUrls: ['./sector.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"] }]; }, null); })();


/***/ }),

/***/ "g0re":
/*!********************************************************!*\
  !*** ./src/app/@pages/ofertas/sector/sector.module.ts ***!
  \********************************************************/
/*! exports provided: SectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorModule", function() { return SectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/product/product.module */ "vzA1");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var _sector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sector.component */ "2/R4");












const app = [
    { path: ':slug', component: _sector_component__WEBPACK_IMPORTED_MODULE_9__["SectorComponent"] },
];
class SectorModule {
}
SectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SectorModule });
SectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SectorModule_Factory(t) { return new (t || SectorModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
            _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SectorModule, { declarations: [_sector_component__WEBPACK_IMPORTED_MODULE_9__["SectorComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
        _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sector_component__WEBPACK_IMPORTED_MODULE_9__["SectorComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
                    _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sector-sector-module.js.map