import { Component, Input, Output, EventEmitter } from '@angular/core';
import { slideInOut, slideLeftInOut } from '@core/animations/slide';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/data.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "angular-bootstrap-md";
import * as i5 from "@angular/common";
import * as i6 from "../../@sharing/drop-menu/drop-menu.component";
import * as i7 from "../../@sharing/select-loja/select-loja.component";
import * as i8 from "../../@sharing/menu-sidebar/menu-sidebar.component";
function TopComponent_li_31_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMap(menu_r1.icon);
} }
function TopComponent_li_31_a_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("alt", menu_r1.name);
    i0.ɵɵproperty("src", menu_r1.icon, i0.ɵɵsanitizeUrl);
} }
const _c0 = function (a0) { return [a0]; };
function TopComponent_li_31_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵtemplate(1, TopComponent_li_31_a_1_i_1_Template, 1, 3, "i", 24);
    i0.ɵɵtemplate(2, TopComponent_li_31_a_1_img_2_Template, 1, 2, "img", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, menu_r1.url));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.type === "font");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.type === "svg");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menu_r1.name, " ");
} }
function TopComponent_li_31_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassMap(menu_r1.icon);
} }
function TopComponent_li_31_a_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("alt", menu_r1.name);
    i0.ɵɵproperty("src", menu_r1.icon, i0.ɵɵsanitizeUrl);
} }
function TopComponent_li_31_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 27);
    i0.ɵɵtemplate(1, TopComponent_li_31_a_2_i_1_Template, 1, 3, "i", 24);
    i0.ɵɵtemplate(2, TopComponent_li_31_a_2_img_2_Template, 1, 2, "img", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", menu_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.type === "font");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.type === "svg");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", menu_r1.name, " ");
} }
function TopComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵtemplate(1, TopComponent_li_31_a_1_Template, 4, 6, "a", 21);
    i0.ɵɵtemplate(2, TopComponent_li_31_a_2_Template, 4, 4, "a", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", menu_r1.inter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !menu_r1.inter);
} }
export class TopComponent {
    constructor(router, db, util) {
        this.router = router;
        this.db = db;
        this.util = util;
        this.entrada = false;
        this.salida = new EventEmitter();
        this.loja = [];
        this.json = [];
        this.items = [];
        this.activeSidebar = 'out';
        this.toog = (ev) => console.log(ev);
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogle = (ev) => {
            if (ev)
                this.entrada = ev;
            this.entrada = !this.entrada;
            this.salida.emit(this.entrada);
        };
        this.onLink = (slug) => this.router.navigateByUrl(`/${slug}`);
        this.trackByFunction = (index, item) => item[index];
        this.desligueSidebar = (ev) => this.activeSidebar = ev;
    }
    ngOnInit() {
        this.ofertas = this.db.getMenuOfertas('menuDepartamento');
        this.loja = this.util.StorageParse('Loja');
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DataService), i0.ɵɵdirectiveInject(i3.UtilService)); };
TopComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TopComponent, selectors: [["app-top"]], inputs: { entrada: "entrada", json: "json", items: "items" }, outputs: { salida: "salida" }, decls: 34, vars: 21, consts: [["id", "topHeader", 1, "sticky-top", "d-none", "d-md-block"], ["id", "top-header", 1, "header-A", "py-1", "d-none", "d-lg-block"], ["SideClass", "navbar navbar-expand-lg navbar-dark ie-nav", 3, "containerInside"], [1, "fas", "white-text", "cursor", 3, "ngClass", "click"], ["id", "top-menu", 1, "navbar-nav", "mx-auto"], ["dropdown", "", 1, "nav-item", "dropdown", "mega-dropdown", 2, "width", "auto!important"], ["dropdownToggle", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "py-N", "header-menu", "dropdown-toggle", "waves-light"], [1, "fas", "fa-briefcase"], [1, "dropdown-menu", "mega-menu", "v-2", "row", "justify-content-center", "z-depth-1", "header-B", "w-100"], [1, "container"], [1, "w-100", "d-flex", "flex-row", "justify-content-around", "mx-md-0", "mx-1"], [3, "data", "titulo"], [1, "fas", "fa-comments"], [1, "caret"], ["titulo", "SAC", 3, "data"], ["titulo", "Trabalhe Conosco", 3, "data"], ["titulo", "Disque Den\u00FAncia", 3, "data"], ["titulo", "Fornecedores", 3, "data"], ["class", "nav-item waves-light", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "items", "condor"], [1, "nav-item", "waves-light"], ["class", "nav-link py-N header-menu", 3, "routerLink", 4, "ngIf"], ["class", "nav-link py-N header-menu", "rel", "noopener", 3, "href", 4, "ngIf"], [1, "nav-link", "py-N", "header-menu", 3, "routerLink"], [3, "class", 4, "ngIf"], ["height", "20px", 3, "src", "alt", 4, "ngIf"], ["height", "20px", 3, "src", "alt"], ["rel", "noopener", 1, "nav-link", "py-N", "header-menu", 3, "href"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mdb-navbar", 2);
        i0.ɵɵelementStart(3, "mdb-navbar-brand");
        i0.ɵɵelementStart(4, "i", 3);
        i0.ɵɵlistener("click", function TopComponent_Template_i_click_4_listener() { return ctx.toogleSidebar(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "links");
        i0.ɵɵelementStart(6, "ul", 4);
        i0.ɵɵelementStart(7, "li", 5);
        i0.ɵɵelementStart(8, "a", 6);
        i0.ɵɵelement(9, "i", 7);
        i0.ɵɵtext(10, " Institucional ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "div", 9);
        i0.ɵɵelementStart(13, "div", 10);
        i0.ɵɵelement(14, "app-drop-menu", 11);
        i0.ɵɵelement(15, "app-drop-menu", 11);
        i0.ɵɵelement(16, "app-drop-menu", 11);
        i0.ɵɵelement(17, "app-drop-menu", 11);
        i0.ɵɵelement(18, "app-drop-menu", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "li", 5);
        i0.ɵɵelementStart(20, "a", 6);
        i0.ɵɵelement(21, "i", 12);
        i0.ɵɵtext(22, " Fale Conosco");
        i0.ɵɵelement(23, "span", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 8);
        i0.ɵɵelementStart(25, "div", 9);
        i0.ɵɵelementStart(26, "div", 10);
        i0.ɵɵelement(27, "app-drop-menu", 14);
        i0.ɵɵelement(28, "app-drop-menu", 15);
        i0.ɵɵelement(29, "app-drop-menu", 16);
        i0.ɵɵelement(30, "app-drop-menu", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(31, TopComponent_li_31_Template, 3, 2, "li", 18);
        i0.ɵɵelement(32, "app-select-loja");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "app-menu-sidebar", 19);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("containerInside", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.activeSidebar === "out" ? "fa-bars" : "fa-times");
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("data", ctx.json.institucional.menu)("titulo", ctx.json.institucional.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.acoes.menu)("titulo", ctx.json.acoes.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.servicos.menu)("titulo", ctx.json.servicos.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.empresa.menu)("titulo", ctx.json.empresa.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.financeiro.menu)("titulo", ctx.json.financeiro.title);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("data", ctx.json.sac);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.trabalhe);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.denuncia);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.json.fornecedores);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.json.menu)("ngForTrackBy", ctx.trackByFunction);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@slideLeftInOut", ctx.activeSidebar)("items", ctx.items)("condor", ctx.json);
    } }, directives: [i4.NavbarComponent, i4.LogoComponent, i5.NgClass, i4.LinksComponent, i4.BsDropdownDirective, i4.BsDropdownToggleDirective, i4.WavesDirective, i6.DropMenuComponent, i5.NgForOf, i7.SelectLojaComponent, i8.MenuSidebarComponent, i5.NgIf, i1.RouterLinkWithHref], styles: [".top-menu[_ngcontent-%COMP%]{ width: 20%; }\n//[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{\n//     position: fixed;\n//     width: 0px;\n//     z-index: 10000000000;\n//     height: 100vh;\n//     background: #e2e2e2;\n// }\n\n.open[_ngcontent-%COMP%]{ width: 300px; }\n.text-underline[_ngcontent-%COMP%] { text-decoration: underline; }\n.bg-mega[_ngcontent-%COMP%] { background-color: var(--color-default--background); }\n.header-A[_ngcontent-%COMP%] { background: var(--color-blue-primary); }\n.header-B[_ngcontent-%COMP%] { background: var(--color-blue-primary); }\n\n.nav-item[_ngcontent-%COMP%]:hover{ background: rgba(0, 0, 0, .2); }\n\n.py-N[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important;\n    padding-left: 0.3rem !important;\n    padding-top: 0.2rem !important;\n    padding-bottom: 0.2rem !important;\n}\n\n//[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   Memu\n.header-menu[_ngcontent-%COMP%] {\n    color: #fff !important;\n    font-weight: 500;\n    font-size: 0.8rem;\n    margin-bottom: 0px !important;\n}\n\n.letter-n-2[_ngcontent-%COMP%] {\n    letter-spacing: -2px;\n}\n\n.i-cartao[_ngcontent-%COMP%] {\n    margin-right: 1rem !important;\n}\n#hovers[_ngcontent-%COMP%]:hover {\n    background: rgba(0, 0, 0, 0.25) !important;\n}\n\n@media (max-width: 1024px) {\n    .i-cartao[_ngcontent-%COMP%] {\n        margin-right: 0.7rem !important;\n        span {\n            font-size: 0.7rem;\n        }\n    }\n\n    .header-menu[_ngcontent-%COMP%] {\n        font-size: 0.7rem;\n    }\n}"], data: { animation: [slideInOut, slideLeftInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TopComponent, [{
        type: Component,
        args: [{
                selector: 'app-top',
                templateUrl: './top.component.html',
                styleUrls: ['./top.component.scss'],
                animations: [slideInOut, slideLeftInOut]
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.DataService }, { type: i3.UtilService }]; }, { entrada: [{
            type: Input
        }], salida: [{
            type: Output
        }], json: [{
            type: Input
        }], items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=top.component.js.map