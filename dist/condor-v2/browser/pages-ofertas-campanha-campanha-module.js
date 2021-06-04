(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ofertas-campanha-campanha-module"],{

/***/ "REog":
/*!************************************************************!*\
  !*** ./src/app/@pages/ofertas/campanha/campanha.module.ts ***!
  \************************************************************/
/*! exports provided: CampanhaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaModule", function() { return CampanhaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/product/product.module */ "vzA1");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var _campanha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campanha.component */ "ZFgC");












const app = [
    { path: ':slug', component: _campanha_component__WEBPACK_IMPORTED_MODULE_9__["CampanhaComponent"] },
];
class CampanhaModule {
}
CampanhaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CampanhaModule });
CampanhaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CampanhaModule_Factory(t) { return new (t || CampanhaModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
            _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampanhaModule, { declarations: [_campanha_component__WEBPACK_IMPORTED_MODULE_9__["CampanhaComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
        _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampanhaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_campanha_component__WEBPACK_IMPORTED_MODULE_9__["CampanhaComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_7__["SemDataModule"],
                    _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_6__["ProductModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZFgC":
/*!***************************************************************!*\
  !*** ./src/app/@pages/ofertas/campanha/campanha.component.ts ***!
  \***************************************************************/
/*! exports provided: CampanhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampanhaComponent", function() { return CampanhaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sharing/product/product.component */ "YXfc");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@sharing/sem-data/sem-data.component */ "q3cj");













function CampanhaComponent_section_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const campanha_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", campanha_r3["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", campanha_r3["full"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CampanhaComponent_section_0_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campanha_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](campanha_r3["title"]);
} }
function CampanhaComponent_section_0_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const campanha_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", campanha_r3["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", campanha_r3["full"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CampanhaComponent_section_0_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campanha_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campanha_r3["title"], "");
} }
function CampanhaComponent_section_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", a_r13);
} }
const _c0 = function (a1) { return { itemsPerPage: 12, currentPage: a1 }; };
function CampanhaComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CampanhaComponent_section_0_img_3_Template, 1, 2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CampanhaComponent_section_0_h2_4_Template, 2, 1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CampanhaComponent_section_0_img_8_Template, 1, 2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CampanhaComponent_section_0_h2_9_Template, 2, 1, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CampanhaComponent_section_0_div_11_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination-controls", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CampanhaComponent_section_0_Template_pagination_controls_pageChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campanha_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", campanha_r3["full"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !campanha_r3["full"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", campanha_r3["full"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !campanha_r3["full"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx_r0.items), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.p)));
} }
function CampanhaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class CampanhaComponent {
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
            this.campanha$ = this.news.Campanha(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => this.proccess(res)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
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
        this.slug$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getCampanha(data));
    }
}
CampanhaComponent.ɵfac = function CampanhaComponent_Factory(t) { return new (t || CampanhaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"])); };
CampanhaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampanhaComponent, selectors: [["app-campanha"]], decls: 4, vars: 4, consts: [["id", "departamento", "class", "py-3 py-md-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "departamento", 1, "py-3", "py-md-5"], [1, "container"], [1, "d-lg-none"], ["class", "w-100 mb-2", 3, "src", "alt", 4, "ngIf"], ["class", "b-08 text-mute text-center pb-1 border-bottom mb-3", 4, "ngIf"], [1, "row", "no-gutters", "justify-content-center"], [1, "col-12"], [1, "d-none", "d-lg-block"], ["class", "b-08 text-mute", 4, "ngIf"], [1, "row", "mt-3"], ["class", "col-6 col-md-4 col-lg-3 mb-4", 4, "ngFor", "ngForOf"], [1, "mt-5"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", "mt-5", "border-top", "pt-1", 3, "pageChange"], [1, "w-100", "mb-2", 3, "src", "alt"], [1, "b-08", "text-mute", "text-center", "pb-1", "border-bottom", "mb-3"], [1, "b-08", "text-mute"], [1, "col-6", "col-md-4", "col-lg-3", "mb-4"], [3, "code"]], template: function CampanhaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CampanhaComponent_section_0_Template, 16, 12, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CampanhaComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.campanha$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_11__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"]], styles: ["@media (max-width: 450px) {\n  .col-lg-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .col-6[_ngcontent-%COMP%] {\n    padding-left: 5px !important;\n    padding-right: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL29mZXJ0YXMvY2FtcGFuaGEvY2FtcGFuaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7RUFDTjs7RUFDRTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL29mZXJ0YXMvY2FtcGFuaGEvY2FtcGFuaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5jb2wtbGctOCwgLmNvbC14bC05IHsgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29sLTYgeyBcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampanhaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campanha',
                templateUrl: './campanha.component.html',
                styleUrls: ['./campanha.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-ofertas-campanha-campanha-module.js.map