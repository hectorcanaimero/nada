import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = function () { return ["/institucional/radar-de-ofertas"]; };
function FaixaComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "a", 6);
    i0.ɵɵelement(5, "img", 7);
    i0.ɵɵelement(6, "img", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
} }
const _c1 = function () { return ["/clubecondor"]; };
function FaixaComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelementStart(4, "a", 6);
    i0.ɵɵelement(5, "img", 11);
    i0.ɵɵelement(6, "img", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c1));
} }
export class FaixaComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaixaComponent.ɵfac = function FaixaComponent_Factory(t) { return new (t || FaixaComponent)(); };
FaixaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FaixaComponent, selectors: [["app-faixa"]], inputs: { type: "type" }, decls: 2, vars: 2, consts: [["id", "banner-top", "class", "condor-banner", 4, "ngIf"], ["id", "banner-footer", "class", "condor-banner clube-banner", 4, "ngIf"], ["id", "banner-top", 1, "condor-banner"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col"], ["rel", "noopener noreferrer", "target", "_blank", 3, "routerLink"], ["Lazy", "", "id", "banner-top", "src", "/assets/images/radar_ofertas.jpg", "alt", "Radar do Ofertas", 1, "img-fluid", "d-none", "d-md-block"], ["Lazy", "", "id", "banner-top", "src", "./assets/images/radar_ofertas_mobile.jpg", "alt", "Radar do Ofertas", 1, "img-fluid", "d-md-none"], ["id", "banner-footer", 1, "condor-banner", "clube-banner"], [1, "col-xl-8", "col-lg-10", "col-md-11"], ["Lazy", "", "id", "banner-footer", "src", "./assets/images/faixa/clube.png", "alt", "Clube Condor", 1, "img-fluid", "d-none", "d-md-block"], ["Lazy", "", "id", "banner-footer", "src", "./assets/images/faixa/clube_mobile.png", "alt", "Clube Condor", 1, "img-fluid", "d-md-none"]], template: function FaixaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FaixaComponent_section_0_Template, 7, 2, "section", 0);
        i0.ɵɵtemplate(1, FaixaComponent_section_1_Template, 7, 2, "section", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type === "radar" || ctx.type === "whats");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "clube");
    } }, directives: [i1.NgIf, i2.RouterLinkWithHref], styles: [".whats-banner[_ngcontent-%COMP%] {\n    background-image: url('../../../assets/images/faixa/bg_whats.png'), linear-gradient(to right, #004c5a, #047e96, #004c5a);\n}\n\n.clube-banner[_ngcontent-%COMP%] {\n    background: linear-gradient(0deg, rgba(220, 13, 5, 0) 95%, rgba(220, 13, 5, 1) 95%),linear-gradient(to right, #016798, #01c6fb, #016798);\n}\n\n@media only screen and (min-width:769px) {}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FaixaComponent, [{
        type: Component,
        args: [{
                selector: 'app-faixa',
                templateUrl: './faixa.component.html',
                styleUrls: ['./faixa.component.scss']
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=faixa.component.js.map