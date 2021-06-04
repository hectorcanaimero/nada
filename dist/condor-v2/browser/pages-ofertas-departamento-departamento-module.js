(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ofertas-departamento-departamento-module"],{

/***/ "6e9W":
/*!********************************************************************!*\
  !*** ./src/app/@pages/ofertas/departamento/departamento.module.ts ***!
  \********************************************************************/
/*! exports provided: DepartamentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentoModule", function() { return DepartamentoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/product/product.module */ "vzA1");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var _departamento_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./departamento.component */ "UmIO");












const app = [
    { path: ':slug', component: _departamento_component__WEBPACK_IMPORTED_MODULE_9__["DepartamentoComponent"] },
    { path: ':slug/setor', loadChildren: () => __webpack_require__.e(/*! import() | sector-sector-module */ "sector-sector-module").then(__webpack_require__.bind(null, /*! ../sector/sector.module */ "g0re")).then(mod => mod.SectorModule) }
];
class DepartamentoModule {
}
DepartamentoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepartamentoModule });
DepartamentoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepartamentoModule_Factory(t) { return new (t || DepartamentoModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartamentoModule, { declarations: [_departamento_component__WEBPACK_IMPORTED_MODULE_9__["DepartamentoComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartamentoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_departamento_component__WEBPACK_IMPORTED_MODULE_9__["DepartamentoComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "UmIO":
/*!***********************************************************************!*\
  !*** ./src/app/@pages/ofertas/departamento/departamento.component.ts ***!
  \***********************************************************************/
/*! exports provided: DepartamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentoComponent", function() { return DepartamentoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_animations_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/animations/slide */ "1OEv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@sharing/select-loja/select-loja.component */ "sCWG");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sharing/product/product.component */ "YXfc");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@sharing/sem-data/sem-data.component */ "q3cj");
/* harmony import */ var _core_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@core/pipes/filtro.pipe */ "m8Mh");
















const _c0 = function (a1, a3) { return ["/departamento", a1, "setor", a3]; };
function DepartamentoComponent_section_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const departamento_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, departamento_r3.slug, s_r6.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r6.sector, " ");
} }
function DepartamentoComponent_section_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", item_r8);
} }
const _c1 = function (a1) { return ["/departamento", a1]; };
const _c2 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
function DepartamentoComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-breadcrumb", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-breadcrumb-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-select-loja", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartamentoComponent_section_0_Template_h6_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toogleSector(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DepartamentoComponent_section_0_div_17_Template, 4, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DepartamentoComponent_section_0_div_23_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "filtro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pagination-controls", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DepartamentoComponent_section_0_Template_pagination_controls_pageChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departamento_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r0.slug$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](departamento_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](departamento_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", departamento_r3.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.viewSector ? "fa-plus" : "fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideDownInOut", ctx_r0.viewSector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, ctx_r0.menuSector$))("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 21, ctx_r0.items$), ctx_r0.search, "dsc_produto"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx_r0.p)))("ngForTrackBy", ctx_r0.trackById);
} }
function DepartamentoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class DepartamentoComponent {
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
            this.menuDepartamento$ = this.db.getMenuOfertas(`menuDepartamentoSlug?slug=${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(({ nome, codigo }) => this.proccess(nome, codigo)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
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
        this.slug$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getDepartamento(data));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ;
}
DepartamentoComponent.ɵfac = function DepartamentoComponent_Factory(t) { return new (t || DepartamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"])); };
DepartamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartamentoComponent, selectors: [["app-departamento"]], decls: 4, vars: 4, consts: [["id", "departamento", "class", "py-3 py-md-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "departamento", 1, "py-3", "py-md-5"], [1, "container"], [1, "mb-5"], [1, "blue-text", "text-uppercase", "d-none", "d-md-block", 3, "routerLink"], [1, "b-08", "border-bottom", "pb-1", "mb-3", "title"], [1, "row", "mobile", "ios", "justify-content-center"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["type", "alert"], [1, "news", "my-4"], [1, "b-07", "border-bottom", "pb-1", "mb-1", 3, "click"], [1, "fas", "float-right", 3, "ngClass"], [1, "sector"], [1, "row", "no-gutters"], ["class", "col-6 col-md-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-8", "col-xl-9"], [1, "mobile"], [1, "row", "mt-3"], ["src", "./assets/images/banner_campanha.jpg", "onerror", "this.style.display='none'", 1, "img-fluid", "mb-4"], ["class", "col-6 col-md-4 mb-3 mb-xl-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], [1, "col-6", "col-md-12"], [1, "text", 3, "routerLink"], [1, "col-6", "col-md-4", "mb-3", "mb-xl-4"], [3, "code"]], template: function DepartamentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartamentoComponent_section_0_Template, 29, 27, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartamentoComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.menuDepartamento$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbBreadcrumbComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbBreadcrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_10__["SelectLojaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_13__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], _core_pipes_filtro_pipe__WEBPACK_IMPORTED_MODULE_14__["FiltroPipe"]], styles: [".sector[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  border-bottom: 0.5px solid #a7a7a7;\n  margin: 0 0.15rem 0.2rem;\n}\n.sector[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-default--text);\n  font-size: 0.8rem;\n}\n@media (min-width: 768px) {\n  .sector[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0.35rem 0;\n  }\n  .sector[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 450px) {\n  .mobile[_ngcontent-%COMP%]   .col-lg-8[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   .col-xl-9[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n  .mobile[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL29mZXJ0YXMvZGVwYXJ0YW1lbnRvL2RlcGFydGFtZW50by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtBQUZSO0FBR1E7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0FBRFY7QUFRQTtFQUlRO0lBQ0Usa0JBQUE7RUFSUjtFQVNRO0lBQUcsZUFBQTtFQU5YO0FBQ0Y7QUFhQTtFQUVJO0lBQ0UsNEJBQUE7SUFDQSw2QkFBQTtFQVpKO0VBY0U7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0VBWko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9vZmVydGFzL2RlcGFydGFtZW50by9kZXBhcnRhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdG9yIHtcbiAgLnJvdyB7XG4gICAgZGl2IHtcbiAgICAgIHB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC41cHggc29saWQgI2E3YTdhNztcbiAgICAgICAgbWFyZ2luOiAwIC4xNXJlbSAuMjByZW07XG4gICAgICAgIGF7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRlZmF1bHQtLXRleHQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3RvciB7XG4gICAgLnJvdyB7XG4gICAgICBkaXYge1xuICAgICAgICBwe1xuICAgICAgICAgIHBhZGRpbmc6IC4zNXJlbSAwO1xuICAgICAgICAgIGF7IGZvbnQtc2l6ZTogMXJlbTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgLmNvbC1sZy04LCAuY29sLXhsLTkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29sLTYge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideDownInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-departamento',
                templateUrl: './departamento.component.html',
                styleUrls: ['./departamento.component.scss'],
                animations: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideDownInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-ofertas-departamento-departamento-module.js.map