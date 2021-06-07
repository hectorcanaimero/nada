import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = function (a0) { return [a0]; };
function MenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, item_r1.url));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1.name);
} }
export class MenuComponent {
    constructor() {
        this.items = [];
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["app-menu"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "nav", "flex-column", "px-2"], ["class", "nav-link active white-text border-bottom", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "nav-link", "active", "white-text", "border-bottom", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵtemplate(1, MenuComponent_a_1_Template, 2, 4, "a", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.NgForOf, i2.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], null, { items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=menu.component.js.map