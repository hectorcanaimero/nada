import { Component, Input, Output, EventEmitter } from '@angular/core';
import { slideDownInOut } from '@core/animations/slide';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/data.service";
import * as i3 from "@angular/common";
import * as i4 from "../mobile-link/mobile-link.component";
import * as i5 from "angular-bootstrap-md";
function MenuSidebarComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const menu_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onLink("departamento/" + menu_r4.slug); });
    i0.ɵɵelementStart(1, "p", 17);
    i0.ɵɵelement(2, "i", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", menu_r4.nome, " ");
} }
function MenuSidebarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_17_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const campanha_r7 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onLink(campanha_r7.slug); });
    i0.ɵɵelementStart(1, "p", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelement(4, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campanha_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", campanha_r7.nome, " ");
} }
function MenuSidebarComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "p", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelement(4, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", center_r10.name, " ");
} }
const _c0 = function (a0) { return [a0]; };
function MenuSidebarComponent_div_18_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_18_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onLink2(); });
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "p", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, center_r10.url));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", center_r10.name, " ");
} }
function MenuSidebarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 19);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_18_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onLink2(); });
    i0.ɵɵtemplate(2, MenuSidebarComponent_div_18_div_2_Template, 5, 1, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MenuSidebarComponent_div_18_ng_template_3_Template, 6, 4, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const center_r10 = ctx.$implicit;
    const _r12 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", center_r10.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", center_r10.external)("ngIfElse", _r12);
} }
function MenuSidebarComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "img", 24);
    i0.ɵɵelementStart(2, "p", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", header_r20.iconmobile, i0.ɵɵsanitizeUrl)("alt", header_r20.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", header_r20.name, " ");
} }
function MenuSidebarComponent_div_25_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_25_ng_template_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.activeSidebar = "out"; });
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelement(2, "img", 24);
    i0.ɵɵelementStart(3, "p", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelement(6, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, header_r20.url));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", header_r20.iconmobile, i0.ɵɵsanitizeUrl)("alt", header_r20.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", header_r20.name, " ");
} }
function MenuSidebarComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 19);
    i0.ɵɵlistener("click", function MenuSidebarComponent_div_25_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.activeSidebar = "out"; });
    i0.ɵɵtemplate(2, MenuSidebarComponent_div_25_div_2_Template, 6, 3, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MenuSidebarComponent_div_25_ng_template_3_Template, 7, 6, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r20 = ctx.$implicit;
    const _r22 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", header_r20.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", header_r20.external)("ngIfElse", _r22);
} }
export class MenuSidebarComponent {
    constructor(router, db) {
        this.router = router;
        this.db = db;
        this.items = [];
        this.condor = [];
        this.activeSidebar = 'out';
        this.outputSidebar = new EventEmitter;
        this.activeMenuOfertas = 'out';
        this.faleConosco = [];
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => {
            const validate = slug.startsWith('http');
            if (validate)
                window.open(slug, '_blank');
            else
                this.router.navigateByUrl(slug);
            this.activeSidebar = 'out';
            this.outputSidebar.emit('out');
        };
        this.onLink2 = () => {
            this.activeSidebar = 'out';
            this.outputSidebar.emit('out');
        };
        this.onToogle = (ev) => {
            this.activeSidebar = ev;
            this.outputSidebar.emit(ev);
        };
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
    }
    ngOnInit() {
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
        this.convertFaleConosco();
    }
}
MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) { return new (t || MenuSidebarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DataService)); };
MenuSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuSidebarComponent, selectors: [["app-menu-sidebar"]], inputs: { items: "items", condor: "condor", activeSidebar: "activeSidebar" }, outputs: { outputSidebar: "outputSidebar" }, decls: 31, vars: 17, consts: [[1, "sidebar"], [1, "image"], ["src", "./assets/images/logo.png", "alt", "Logo Condor", 1, "logo"], [1, "menu", "overflow-auto"], [1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", "fa-angle-right", "float-right"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "items", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "space"], ["titulo", "Fale Conosco", 3, "items", "toogle"], [3, "titulo", "items", "toogle"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", "routerLinkActive", "active", 1, "item"], [1, "fas", "fa-shopping-basket", "mr-1"], ["target", "_blank", 3, "href", "click"], ["class", "items", 4, "ngIf", "ngIfElse"], ["Internal", ""], [1, "items"], [3, "routerLink", "click"], [3, "src", "alt"]], template: function MenuSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵlistener("click", function MenuSidebarComponent_Template_div_click_4_listener() { return ctx.onLink(""); });
        i0.ɵɵelementStart(5, "p", 5);
        i0.ɵɵtext(6, " Home ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 4);
        i0.ɵɵlistener("click", function MenuSidebarComponent_Template_div_click_9_listener() { return ctx.toogleMenuOfertas(); });
        i0.ɵɵelementStart(10, "p", 5);
        i0.ɵɵtext(11, " Ofertas ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 6);
        i0.ɵɵelement(13, "i", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 9);
        i0.ɵɵtemplate(15, MenuSidebarComponent_div_15_Template, 6, 1, "div", 10);
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, MenuSidebarComponent_div_17_Template, 5, 1, "div", 11);
        i0.ɵɵtemplate(18, MenuSidebarComponent_div_18_Template, 5, 3, "div", 12);
        i0.ɵɵelementStart(19, "div", 4);
        i0.ɵɵlistener("click", function MenuSidebarComponent_Template_div_click_19_listener() { return ctx.onLink("/blog"); });
        i0.ɵɵelementStart(20, "p", 5);
        i0.ɵɵtext(21, " Blog ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 6);
        i0.ɵɵelement(23, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 13);
        i0.ɵɵtemplate(25, MenuSidebarComponent_div_25_Template, 5, 3, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "app-mobile-link", 14);
        i0.ɵɵlistener("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_26_listener($event) { return ctx.onToogle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "app-mobile-link", 15);
        i0.ɵɵlistener("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_27_listener($event) { return ctx.onToogle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "app-mobile-link", 15);
        i0.ɵɵlistener("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_28_listener($event) { return ctx.onToogle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "app-mobile-link", 15);
        i0.ɵɵlistener("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_29_listener($event) { return ctx.onToogle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "app-mobile-link", 15);
        i0.ɵɵlistener("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_30_listener($event) { return ctx.onToogle($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngClass", ctx.activeMenuOfertas === "out" ? "fa-plus" : "fa-minus");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@slideDownInOut", ctx.activeMenuOfertas);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 15, ctx.menuOfertas$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items.campanha);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items.center);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.items.header);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("items", ctx.faleConosco);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("titulo", ctx.condor.institucional.title)("items", ctx.condor.institucional.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("titulo", ctx.condor.acoes.title)("items", ctx.condor.acoes.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("titulo", ctx.condor.financeiro.title)("items", ctx.condor.financeiro.menu);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("titulo", ctx.condor.empresa.title)("items", ctx.condor.empresa.menu);
    } }, directives: [i3.NgClass, i3.NgForOf, i4.MobileLinkComponent, i5.WavesDirective, i1.RouterLinkActive, i3.NgIf, i1.RouterLinkWithHref], pipes: [i3.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  a{\n    color: #444 !important;\n  }\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 20%;\n  min-width: 270px;\n  height: 100vh;\n  z-index: 10;\n  background-color: #fff !important;\n  box-shadow: 1px 2px 5px rgba($color: #000000, $alpha: .35);\n  .image {\n    text-align: center;\n    img{\n      height: 40px\n    };\n  }\n  .menu {\n    padding: 1rem 1rem;\n    margin-top: 1rem;\n    .items {\n      flex: row;\n      display: flex;\n      font-size: .9rem;\n      align-items: center;\n      padding: .35rem .5rem;\n      cursor: pointer;\n      background-color: #fff;\n      border-bottom: 1px solid #ececec;\n      img {\n        width: 30px;\n        margin-right: 10px;\n      }\n      .item{\n        width: 90%;\n        margin-bottom: 0;\n      }\n      .icon {\n        width: 10%;\n        text-align: right;\n      }\n    }\n    .sub-menu-items{\n      flex: row;\n      display: flex;\n      align-items: center;\n      padding: .35rem .5rem;\n      background-color: #fff;\n      border-bottom: 1px solid #ececec;\n      cursor: pointer;\n      .item {\n        width: 85%;\n        font-size: .8rem;\n        margin-bottom: 0;\n      }\n      .icon{\n        width: 15%;\n      }\n    }\n    .space {\n      margin: .25rem 0;\n    }\n  }\n}"], data: { animation: [slideDownInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'app-menu-sidebar',
                templateUrl: './menu-sidebar.component.html',
                styleUrls: ['./menu-sidebar.component.scss'],
                animations: [slideDownInOut]
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.DataService }]; }, { items: [{
            type: Input
        }], condor: [{
            type: Input
        }], activeSidebar: [{
            type: Input
        }], outputSidebar: [{
            type: Output
        }] }); })();
//# sourceMappingURL=menu-sidebar.component.js.map