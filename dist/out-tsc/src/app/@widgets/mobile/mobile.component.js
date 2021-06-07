import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { slideDownInOut, slideLeftInOut } from '@core/animations/slide';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@core/services/data.service";
import * as i4 from "@core/services/news.service";
import * as i5 from "@core/services/util.service";
import * as i6 from "ngx-responsive";
import * as i7 from "../../@sharing/select-loja/select-loja.component";
import * as i8 from "@angular/common";
import * as i9 from "../../@sharing/mobile-link/mobile-link.component";
import * as i10 from "angular-bootstrap-md";
const _c0 = ["search"];
function MobileComponent_main_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_26_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const menu_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onLink("departamento/" + menu_r6.slug); });
    i0.ɵɵelementStart(1, "p", 30);
    i0.ɵɵelement(2, "i", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelement(5, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", menu_r6.nome, " ");
} }
function MobileComponent_main_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_28_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const campanha_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onLink(campanha_r9.slug); });
    i0.ɵɵelementStart(1, "p", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelement(4, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campanha_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", campanha_r9.nome, " ");
} }
function MobileComponent_main_0_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "p", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵelement(4, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", center_r12.name, " ");
} }
const _c1 = function (a0) { return [a0]; };
function MobileComponent_main_0_div_29_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 36);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_29_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.activeSidebar = "out"; });
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementStart(2, "p", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelement(5, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c1, center_r12.url));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", center_r12.name, " ");
} }
function MobileComponent_main_0_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_29_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.activeSidebar = "out"; });
    i0.ɵɵtemplate(2, MobileComponent_main_0_div_29_div_2_Template, 5, 1, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MobileComponent_main_0_div_29_ng_template_3_Template, 6, 4, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r12 = ctx.$implicit;
    const _r14 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", center_r12.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", center_r12.external)("ngIfElse", _r14);
} }
function MobileComponent_main_0_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "img", 37);
    i0.ɵɵelementStart(2, "p", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelement(5, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", header_r22.iconmobile, i0.ɵɵsanitizeUrl)("alt", header_r22.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", header_r22.name, " ");
} }
function MobileComponent_main_0_div_36_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 36);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_36_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.activeSidebar = "out"; });
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelement(2, "img", 37);
    i0.ɵɵelementStart(3, "p", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17);
    i0.ɵɵelement(6, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c1, header_r22.url));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", header_r22.iconmobile, i0.ɵɵsanitizeUrl)("alt", header_r22.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", header_r22.name, " ");
} }
function MobileComponent_main_0_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 32);
    i0.ɵɵlistener("click", function MobileComponent_main_0_div_36_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.activeSidebar = "out"; });
    i0.ɵɵtemplate(2, MobileComponent_main_0_div_36_div_2_Template, 6, 3, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MobileComponent_main_0_div_36_ng_template_3_Template, 7, 6, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r22 = ctx.$implicit;
    const _r24 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", header_r22.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", header_r22.external)("ngIfElse", _r24);
} }
function MobileComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 1);
    i0.ɵɵelementStart(1, "header", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "i", 5);
    i0.ɵɵlistener("click", function MobileComponent_main_0_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.toogleSidebar(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵelement(6, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵelement(8, "app-select-loja");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵelementStart(10, "input", 10, 11);
    i0.ɵɵlistener("keyup", function MobileComponent_main_0_Template_input_keyup_10_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.getSearch($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "section", 12);
    i0.ɵɵelementStart(13, "div", 13);
    i0.ɵɵelement(14, "div", 14);
    i0.ɵɵelementStart(15, "div", 15);
    i0.ɵɵlistener("click", function MobileComponent_main_0_Template_div_click_15_listener() { i0.ɵɵrestoreView(_r33); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onLink(""); });
    i0.ɵɵelementStart(16, "p", 16);
    i0.ɵɵtext(17, " Home ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 17);
    i0.ɵɵelement(19, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 15);
    i0.ɵɵlistener("click", function MobileComponent_main_0_Template_div_click_20_listener() { i0.ɵɵrestoreView(_r33); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.toogleMenuOfertas(); });
    i0.ɵɵelementStart(21, "p", 16);
    i0.ɵɵtext(22, " Ofertas ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 17);
    i0.ɵɵelement(24, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 20);
    i0.ɵɵtemplate(26, MobileComponent_main_0_div_26_Template, 6, 1, "div", 21);
    i0.ɵɵpipe(27, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, MobileComponent_main_0_div_28_Template, 5, 1, "div", 22);
    i0.ɵɵtemplate(29, MobileComponent_main_0_div_29_Template, 5, 3, "div", 23);
    i0.ɵɵelementStart(30, "div", 15);
    i0.ɵɵlistener("click", function MobileComponent_main_0_Template_div_click_30_listener() { i0.ɵɵrestoreView(_r33); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.onLink("/blog"); });
    i0.ɵɵelementStart(31, "p", 16);
    i0.ɵɵtext(32, " Blog ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 17);
    i0.ɵɵelement(34, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 24);
    i0.ɵɵtemplate(36, MobileComponent_main_0_div_36_Template, 5, 3, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "app-mobile-link", 25);
    i0.ɵɵlistener("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_37_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.onToogle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "app-mobile-link", 26);
    i0.ɵɵlistener("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_38_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.onToogle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "app-mobile-link", 26);
    i0.ɵɵlistener("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_39_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onToogle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "app-mobile-link", 26);
    i0.ɵɵlistener("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_40_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.onToogle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "app-mobile-link", 26);
    i0.ɵɵlistener("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_41_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onToogle($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 27);
    i0.ɵɵlistener("click", function MobileComponent_main_0_Template_div_click_42_listener() { i0.ɵɵrestoreView(_r33); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.toogleSidebar(); });
    i0.ɵɵelement(43, "i", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("@slideLeftInOut", ctx_r0.activeSidebar);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngClass", ctx_r0.activeMenuOfertas === "out" ? "fa-plus" : "fa-minus");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@slideDownInOut", ctx_r0.activeMenuOfertas);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(27, 16, ctx_r0.menuOfertas$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.campanha);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.center);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.header);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r0.faleConosco);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("titulo", ctx_r0.condor.institucional.title)("items", ctx_r0.condor.institucional.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("titulo", ctx_r0.condor.acoes.title)("items", ctx_r0.condor.acoes.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("titulo", ctx_r0.condor.financeiro.title)("items", ctx_r0.condor.financeiro.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("titulo", ctx_r0.condor.empresa.title)("items", ctx_r0.condor.empresa.menu);
} }
const _c2 = function () { return ["xs", "sm"]; };
export class MobileComponent {
    constructor(router, seo, db, news, util) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.news = news;
        this.util = util;
        this.salida = new EventEmitter();
        this.activeSidebar = 'out';
        this.activeMenuOfertas = 'out';
        this.items = [];
        this.condor = [];
        this.faleConosco = [];
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => {
            console.log(slug);
            const validate = slug.startsWith('http');
            if (validate)
                window.open(slug, '_blank');
            else
                this.router.navigateByUrl(slug);
            this.activeSidebar = 'out';
        };
        this.onToogle = (ev) => this.activeSidebar = ev;
        this.getSearch = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                return this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
            }
        };
        this.getSearchClick = () => {
            if (!this.search.nativeElement.value)
                return;
            return this.router.navigate(['pesquisa-usuario', this.util.toSlug(this.search.nativeElement.value)]);
        };
        this.getCategory = () => this.category = this.news.getBlogCollection('categories?orderby=count&order=desc&per_page=10')
            .pipe(map(res => res.body));
        this.goToCategory = (e) => this.router.navigate(['/blog', 'categoria', e.target.value]);
        this.goToDepartamento = (e) => this.router.navigate(['/departamento', e.target.value]);
        // toog = (ev) => this.entrada = false;
        this.Click = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                this.seo.dataLayerTracking({ event: 'blogsearch', searchTerm: event.target.value });
                return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
            }
        };
    }
    ngOnInit() {
        this.getCategory();
        this.convertFaleConosco();
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.DataService), i0.ɵɵdirectiveInject(i4.NewsService), i0.ɵɵdirectiveInject(i5.UtilService)); };
MobileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MobileComponent, selectors: [["app-mobile"]], viewQuery: function MobileComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
    } }, inputs: { activeSidebar: "activeSidebar", items: "items", condor: "condor" }, outputs: { salida: "salida" }, decls: 1, vars: 2, consts: [["id", "mobile", 4, "showItBootstrap"], ["id", "mobile"], [1, "fixed-top"], [1, "top"], [1, "menu"], [1, "fa", "white-text", "fa-bars", 3, "click"], ["href", "#"], ["src", "./assets/images/logo.png", "alt", "Logo Condor", "width", "265", "height", "55", 1, "logo"], [1, "select-loja"], [1, "search"], ["placeholder", "O que voc\u00EA est\u00E1 procurando?", 3, "keyup"], ["search", ""], [1, "sidebar"], [1, "menu", "overflow-auto"], [2, "height", "40px"], [1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", "fa-angle-right", "float-right"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "items", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "space"], ["titulo", "Fale Conosco", 3, "items", "toogle"], [3, "titulo", "items", "toogle"], [1, "vacio", 3, "click"], [1, "fa", "white-text", "fa-times"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", "routerLinkActive", "active", 1, "item"], [1, "fas", "fa-shopping-basket", "mr-1"], ["target", "_blank", 3, "href", "click"], ["class", "items", 4, "ngIf", "ngIfElse"], ["Internal", ""], [1, "items"], [3, "routerLink", "click"], [3, "src", "alt"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MobileComponent_main_0_Template, 44, 18, "main", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("showItBootstrap", i0.ɵɵpureFunction0(1, _c2));
    } }, directives: [i6.ShowItBootstrapDirective, i7.SelectLojaComponent, i8.NgClass, i8.NgForOf, i9.MobileLinkComponent, i10.WavesDirective, i1.RouterLinkActive, i8.NgIf, i1.RouterLinkWithHref], pipes: [i8.AsyncPipe], styles: ["#mobile[_ngcontent-%COMP%] {\n  a{\n    color: #444 !important;\n  }\n  header{\n    .top {\n      padding: .45rem 0;\n      text-align: center;\n      background-color: var(--color-blue-primary);\n      .logo {\n        width: auto;\n        height: 30px;\n      }\n      .menu {\n        left: .75rem;\n        font-size: 1.3rem;\n        position: absolute;\n      }\n    }\n    .select-loja {\n      background-color: var(--color-red-secondary);\n    }\n    .search {\n      input {\n        width: 100%;\n        border: 0px;\n        color: #727272;\n        min-height: 40px;\n        font-size: .9rem;\n        padding: .25rem .5rem;\n        border-bottom: 1px solid #ececec;\n      }\n    }\n  }\n  .sidebar {\n    top: 0;\n    left: 0;\n    flex: row;\n    width: 100%;\n    display: flex;\n    position: fixed;\n    height: 100vh;\n    z-index: 10000000000;\n    // background-color: rgba($color: #000000, $alpha: .70);\n    .menu {\n      width: 80%;\n      height: 100vh;\n      z-index: 100000;\n      background-color: var(--color-default--background-2);\n      .items {\n        flex: row;\n        display: flex;\n        font-size: .9rem;\n        align-items: center;\n        padding: .35rem .5rem;\n        background-color: #fff;\n        border-bottom: 1px solid #ececec;\n        img {\n          width: 30px;\n          margin-right: 10px;\n        }\n        .item{\n          width: 90%;\n          margin-bottom: 0;\n        }\n        .icon {\n          width: 10%;\n          text-align: right;\n        }\n      }\n      .sub-menu-items{\n        flex: row;\n        display: flex;\n        align-items: center;\n        padding: .35rem .5rem;\n        background-color: #fff;\n        border-bottom: 1px solid #ececec;\n        .item {\n          width: 85%;\n          font-size: .8rem;\n          margin-bottom: 0;\n        }\n        .icon{\n          width: 15%;\n        }\n      }\n      .space {\n        margin: .25rem 0;\n      }\n    }\n    .vacio {\n      width: 20%;\n      color: #fff;\n      font-weight: 700;\n      font-size: 1.8rem;\n      text-align: center;\n      padding-top: 1.3rem;\n    }\n  }\n  footer {\n    background-color: var(--color-blue-primary);\n    p {\n      color: #fff;\n      margin-bottom: 0px;\n      text-align: center;\n    }\n  }\n}"], data: { animation: [slideDownInOut, slideLeftInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MobileComponent, [{
        type: Component,
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.scss'],
                animations: [slideDownInOut, slideLeftInOut]
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SeoService }, { type: i3.DataService }, { type: i4.NewsService }, { type: i5.UtilService }]; }, { search: [{
            type: ViewChild,
            args: ['search']
        }], salida: [{
            type: Output
        }], activeSidebar: [{
            type: Input
        }], items: [{
            type: Input
        }], condor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=mobile.component.js.map