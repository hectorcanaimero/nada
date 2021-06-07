import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/data.service";
import * as i2 from "angular-bootstrap-md";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../../@sharing/link/link.component";
const _c0 = function (a1) { return ["departamento", a1]; };
function MenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵelementStart(3, "p", 17);
    i0.ɵɵelementStart(4, "span", 18);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, item_r4.slug));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.nome);
} }
const _c1 = function (a0) { return [a0]; };
function MenuComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "a", 16);
    i0.ɵɵelementStart(2, "p", 17);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c1, item_r5.slug));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.nome);
} }
function MenuComponent_li_17_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c1, item_r6.url));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function MenuComponent_li_17_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", i0.ɵɵpureFunction1(2, _c1, item_r6.url), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function MenuComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtemplate(1, MenuComponent_li_17_a_1_Template, 2, 4, "a", 20);
    i0.ɵɵtemplate(2, MenuComponent_li_17_a_2_Template, 2, 4, "a", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.external);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.external);
} }
function MenuComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 24);
    i0.ɵɵelement(1, "app-link", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r11);
} }
export class MenuComponent {
    constructor(db) {
        this.db = db;
        this.json = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items = this.db.getMenuOfertas('menuDepartamento');
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(i0.ɵɵdirectiveInject(i1.DataService)); };
MenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["app-menu"]], inputs: { json: "json" }, decls: 20, vars: 11, consts: [["SideClass", "navbar navbar-expand-lg red navbar-dark ie-nav d-none d-lg-block", "id", "menuOfertas", 3, "containerInside"], ["rel", "noopener noreferrer", "href", "http://www.familiacondor.com.br", "target", "_blank", 1, "navbar-brand"], ["Lazy", "", "src", "./assets/images/familia.png", "width", "60px", "alt", "familia condor", 1, "d-lg-none", "d-xl-none"], [1, "navbar-nav", "pr-3", "border-right-menu", "justify-content-start"], ["dropdown", "", 1, "nav-item", "dropdown", "mega-dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "b-08", "dropdown-toggle", "waves-light"], [1, "caret"], [1, "dropdown-menu", "mega-menu", "row", "z-depth-1", "bg-mega", "w-100"], [1, "container"], [1, "row", "mx-md-4", "mx-1"], ["class", "col-lg-4 col-xl-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "navbar-nav", "mx-auto"], ["class", "nav-item waves-light px-0 px-xl-1", "mdbWavesEffect", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "iconsrr", 1, "navbar-nav", "mr-auto", "border-left-menu", "pl-3"], ["class", "nav-item waves-light mr-1", "mdbWavesEffect", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-4", "col-xl-3"], [1, "p-0", 3, "routerLink"], [1, "py-2", "mb-0", "border-bottom", "b-05"], [1, "ml-2"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light", "px-0", "px-xl-1"], ["class", "nav-link b-06", 3, "routerLink", 4, "ngIf"], ["rel", "noopener noreferrer", "class", "nav-link b-06", "target", "_blank", 3, "href", 4, "ngIf"], [1, "nav-link", "b-06", 3, "routerLink"], ["rel", "noopener noreferrer", "target", "_blank", 1, "nav-link", "b-06", 3, "href"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light", "mr-1"], [1, "nav-link", "b-06", "py-0", "mt-1", "px-1", 3, "item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mdb-navbar", 0);
        i0.ɵɵelementStart(1, "mdb-navbar-brand");
        i0.ɵɵelementStart(2, "a", 1);
        i0.ɵɵelement(3, "img", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "links");
        i0.ɵɵelementStart(5, "ul", 3);
        i0.ɵɵelementStart(6, "li", 4);
        i0.ɵɵelementStart(7, "a", 5);
        i0.ɵɵtext(8, " Todas as ofertas");
        i0.ɵɵelement(9, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "div", 8);
        i0.ɵɵelementStart(12, "div", 9);
        i0.ɵɵtemplate(13, MenuComponent_div_13_Template, 6, 4, "div", 10);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵtemplate(15, MenuComponent_div_15_Template, 5, 4, "div", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "ul", 11);
        i0.ɵɵtemplate(17, MenuComponent_li_17_Template, 3, 2, "li", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "ul", 13);
        i0.ɵɵtemplate(19, MenuComponent_li_19_Template, 2, 1, "li", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("containerInside", true);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 9, ctx.items))("ngForTrackBy", ctx.trackByFunction);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.json.campanha)("ngForTrackBy", ctx.trackByFunction);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.json.center)("ngForTrackBy", ctx.trackByFunction);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.json.right)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [i2.NavbarComponent, i2.LogoComponent, i2.LinksComponent, i2.BsDropdownDirective, i2.BsDropdownToggleDirective, i2.WavesDirective, i3.NgForOf, i4.RouterLinkWithHref, i3.NgIf, i5.LinkComponent], pipes: [i3.AsyncPipe], styles: [".nav-item[_ngcontent-%COMP%]:hover{ background: rgba($color: #000000, $alpha: .10); }\n.menuBack[_ngcontent-%COMP%] { background-color: var(--color-red-primary); }\n.bg-mega[_ngcontent-%COMP%] { background-color: var(--color-default--background); }\n\n\n.bg-menu[_ngcontent-%COMP%]{\n  background-color: var(--color-red-primary);\n}\n\n.rot[_ngcontent-%COMP%] {\n    transform: rotate(350deg);\n    -ms-transform: rotate(350deg);\n    -moz-transform: rotate(350deg);\n    -webkit-transform: rotate(350deg);\n    -o-transform: rotate(350deg);\n}\n\n#iconsrr[_ngcontent-%COMP%] { display: flex; }\n.title-mega[_ngcontent-%COMP%] { color: var(--color-red-primary); }\n\n.text-underline[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n@media (max-width: 1200px) {\n    .nav-item[_ngcontent-%COMP%] {\n        font-size: .8rem !important;\n    }\n}\n\n@media (max-width: 1114px) {\n    .nav-item[_ngcontent-%COMP%] {\n        font-size: 1rem !important;\n    }\n    #iconsrr[_ngcontent-%COMP%] {\n        display: none;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: i1.DataService }]; }, { json: [{
            type: Input
        }] }); })();
//# sourceMappingURL=menu.component.js.map