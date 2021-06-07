import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "angular-bootstrap-md";
function SocialComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", s_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(s_r1.icon);
} }
export class SocialComponent {
    constructor() {
        this.items = [];
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SocialComponent, selectors: [["app-social"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "nav", "mx-auto", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["rel", "noopener noreferrer", "target", "_blank", "floating", "true", "mdbBtn", "", "size", "lg", "color", "condor-floating", "mdbWavesEffect", "", 1, "waves-light", "nav-item", "mb-4", 3, "href"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, SocialComponent_li_1_Template, 3, 4, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.NgForOf, i2.MdbBtnDirective, i2.WavesDirective], styles: ["//[_ngcontent-%COMP%]   Icon[_ngcontent-%COMP%]   Social\na.waves-effect[_ngcontent-%COMP%], a.waves-light[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.btn-condor-floating[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n\n.btn-floating[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  color: rgba(0, 0, 0, 0.7) !important;\n}\n\n.btn-floating[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18), 0 2px 5px 0 rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  margin: 5px;\n  border-radius: 50%;\n  padding: 0;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n\n.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: inherit;\n  text-align: center;\n  font-size: 1.1rem;\n  line-height: 30px;\n  font-weight: 500;\n}\n\n@media (max-width: 1024px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 40px;\n    width: 30px;\n    height: 30px;\n  }\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 30px;\n  }\n}\n\n@media (max-width: 800px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 40px;\n    width: 40px;\n    height: 40px;\n  }\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 40px;\n  }\n}\n\n@media (max-width: 450px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 20px;\n    width: 40px;\n    height: 40px;\n  }\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 40px;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SocialComponent, [{
        type: Component,
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss']
            }]
    }], null, { items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=social.component.js.map