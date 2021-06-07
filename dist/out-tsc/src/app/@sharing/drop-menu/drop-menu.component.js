import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function DropMenuComponent_li_6_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", item_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r1.nome, " ");
} }
const _c0 = function (a0) { return [a0]; };
function DropMenuComponent_li_6_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, item_r1.url));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r1.nome, " ");
} }
function DropMenuComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, DropMenuComponent_li_6_a_1_Template, 2, 2, "a", 5);
    i0.ɵɵtemplate(2, DropMenuComponent_li_6_a_2_Template, 2, 4, "a", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.external);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.external);
} }
export class DropMenuComponent {
    constructor() {
        this.data = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
    }
}
DropMenuComponent.ɵfac = function DropMenuComponent_Factory(t) { return new (t || DropMenuComponent)(); };
DropMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DropMenuComponent, selectors: [["app-drop-menu"]], inputs: { titulo: "titulo", data: "data" }, decls: 7, vars: 3, consts: [[1, "drop-menu", "sub-menu", "my-3"], [1, "titulo"], ["href", "#"], [1, "list-unstyled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "p-0 menu-item white-text", "rel", "noopener", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "p-0 menu-item white-text", 3, "routerLink", 4, "ngIf"], ["rel", "noopener", "target", "_blank", 1, "p-0", "menu-item", "white-text", 3, "href"], [1, "p-0", "menu-item", "white-text", 3, "routerLink"]], template: function DropMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h6");
        i0.ɵɵelementStart(3, "a", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "ul", 3);
        i0.ɵɵtemplate(6, DropMenuComponent_li_6_Template, 3, 2, "li", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.titulo);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [i1.NgForOf, i1.NgIf, i2.RouterLinkWithHref], styles: [".drop-menu[_ngcontent-%COMP%]{\n  .titulo {\n    margin-bottom: 1rem;\n    h6 {\n      text-align: center;\n      font-size: .9rem !important;\n      text-decoration: underline;\n      a {\n        font-weight: 600 !important;\n        color: #fafafa !important;\n      }\n    }\n  }\n  ul {\n    padding: 0 10px;\n    li {\n      padding-left: 5px;\n      a {\n        font-size: .8rem;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n      }\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DropMenuComponent, [{
        type: Component,
        args: [{
                selector: 'app-drop-menu',
                templateUrl: './drop-menu.component.html',
                styleUrls: ['./drop-menu.component.scss']
            }]
    }], function () { return []; }, { titulo: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=drop-menu.component.js.map