import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = function (a0) { return [a0]; };
function TituloComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, ctx_r0.link));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.icon, " mr-2");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.titulo);
} }
function TituloComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 5);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.icon, " mr-2");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.titulo);
} }
export class TituloComponent {
    constructor() {
        this.link = '';
    }
}
TituloComponent.ɵfac = function TituloComponent_Factory(t) { return new (t || TituloComponent)(); };
TituloComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TituloComponent, selectors: [["app-titulo"]], inputs: { titulo: "titulo", icon: "icon", link: "link" }, decls: 2, vars: 2, consts: [["class", "b-07 mb-4 pb-1 border-bottom", 4, "ngIf"], ["class", "titulo-balck b-07 mb-4 pb-1 border-bottom", 4, "ngIf"], [1, "b-07", "mb-4", "pb-1", "border-bottom"], [3, "routerLink"], ["aria-hidden", "true"], [1, "titulo-balck", "b-07", "mb-4", "pb-1", "border-bottom"]], template: function TituloComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TituloComponent_h2_0_Template, 5, 7, "h2", 0);
        i0.ɵɵtemplate(1, TituloComponent_h2_1_Template, 4, 4, "h2", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.link);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.link);
    } }, directives: [i1.NgIf, i2.RouterLinkWithHref], styles: ["h2[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{ color: var(--color-red-secondary) !important; }\n\n@media(max-width: 450px) {\n  h2[_ngcontent-%COMP%]{ font-size: 1.5rem; padding: 0 15px; }\n}\n\n@media(max-width: 375px) {\n  h2[_ngcontent-%COMP%]{ font-size: 1.3rem; }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TituloComponent, [{
        type: Component,
        args: [{
                selector: 'app-titulo',
                templateUrl: './titulo.component.html',
                styleUrls: ['./titulo.component.scss']
            }]
    }], null, { titulo: [{
            type: Input
        }], icon: [{
            type: Input
        }], link: [{
            type: Input
        }] }); })();
//# sourceMappingURL=titulo.component.js.map