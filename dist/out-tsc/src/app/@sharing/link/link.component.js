import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function LinkComponent_a_0_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.item.icon, i0.ɵɵsanitizeUrl)("alt", ctx_r2.item.name || ctx_r2.item.alt);
} }
function LinkComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtemplate(1, LinkComponent_a_0_img_1_Template, 1, 2, "img", 3);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r0.style);
    i0.ɵɵclassMap(ctx_r0.class);
    i0.ɵɵproperty("href", ctx_r0.item.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.item.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.item.name);
} }
function LinkComponent_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.item.icon, i0.ɵɵsanitizeUrl)("alt", ctx_r3.item.name || ctx_r3.item.alt);
} }
const _c0 = function (a0) { return [a0]; };
function LinkComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵtemplate(1, LinkComponent_a_1_img_1_Template, 1, 2, "img", 3);
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(ctx_r1.style);
    i0.ɵɵclassMap(ctx_r1.class);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, ctx_r1.item.url));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.item.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.item.name);
} }
export class LinkComponent {
    constructor() {
        this.item = [];
        this.class = '';
        this.style = '';
    }
    ngOnInit() {
    }
}
LinkComponent.ɵfac = function LinkComponent_Factory(t) { return new (t || LinkComponent)(); };
LinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LinkComponent, selectors: [["app-link"]], inputs: { item: "item", class: "class", style: "style" }, decls: 2, vars: 2, consts: [["rel", "noopener", "target", "_blank", 3, "class", "style", "href", 4, "ngIf"], [3, "class", "style", "routerLink", 4, "ngIf"], ["rel", "noopener", "target", "_blank", 3, "href"], ["height", "30px", 3, "src", "alt", 4, "ngIf"], [1, "d-none", "d-lg-block", "mt-2"], ["height", "30px", 3, "src", "alt"], [3, "routerLink"]], template: function LinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LinkComponent_a_0_Template, 5, 7, "a", 0);
        i0.ɵɵtemplate(1, LinkComponent_a_1_Template, 5, 9, "a", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.item.external);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.item.external);
    } }, directives: [i1.NgIf, i2.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkComponent, [{
        type: Component,
        args: [{
                selector: 'app-link',
                templateUrl: './link.component.html',
                styleUrls: ['./link.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: Input
        }], class: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
//# sourceMappingURL=link.component.js.map