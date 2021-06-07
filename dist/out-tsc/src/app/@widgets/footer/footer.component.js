import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "angular-bootstrap-md";
import * as i2 from "@angular/router";
import * as i3 from "../../@sharing/social/social.component";
import * as i4 from "../../@sharing/menu/menu.component";
const _c0 = function () { return ["/fale-conosco/trabalhe-conosco"]; };
const _c1 = function () { return ["/fale/conosco/sac"]; };
export class FooterComponent {
    constructor() {
        this.items = [];
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], inputs: { items: "items" }, decls: 29, vars: 10, consts: [[1, "pt-3", "pt-md-5"], [1, "container", "pb-md-5"], [1, "row", "ios"], [1, "col-12", "d-md-none", "mb-4"], [1, "list-group", "list-group-flush", 2, "background", "none !important", "color", "#fff !important"], [1, "list-group-item", "rgba-0", 2, "background", "none !important", "color", "#fff !important"], ["href", "tel:0800416655", 1, "white-text"], ["fas", "", "icon", "phone", 1, "mr-1"], [1, "white-text", 3, "routerLink"], ["fas", "", "icon", "briefcase", 1, "mr-1"], ["fas", "", "icon", "headset", 1, "mr-1"], [1, "col-12", "col-md-6", "col-lg-3", "d-none", "d-md-block"], ["Lazy", "", "alt", "", 1, "img-fluid", "mb-4", 3, "src"], [1, "col-12", "col-md-6", "col-lg-3", "d-lg-none"], [3, "items"], [1, "col-6", "col-md-6", "col-lg-3", "d-none", "d-lg-block", "text-center"], [1, "copyright"], [1, "footer-copyright", "text-center", "mb-0", "py-2", "b-04", 3, "innerHTML"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "footer", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "ul", 4);
        i0.ɵɵelementStart(5, "li", 5);
        i0.ɵɵelementStart(6, "a", 6);
        i0.ɵɵelement(7, "mdb-icon", 7);
        i0.ɵɵtext(8, " Fale Conosco 0800 416655 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "li", 5);
        i0.ɵɵelementStart(10, "a", 8);
        i0.ɵɵelement(11, "mdb-icon", 9);
        i0.ɵɵtext(12, " Trabalhe Conosco ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "li", 5);
        i0.ɵɵelementStart(14, "a", 8);
        i0.ɵɵelement(15, "mdb-icon", 10);
        i0.ɵɵtext(16, " Contato ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 11);
        i0.ɵɵelement(18, "img", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 13);
        i0.ɵɵelement(20, "app-social", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 11);
        i0.ɵɵelement(22, "app-menu", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 11);
        i0.ɵɵelement(24, "app-menu", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 15);
        i0.ɵɵelement(26, "app-social", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 16);
        i0.ɵɵelement(28, "p", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(8, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(9, _c1));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("src", ctx.items.logo, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.items.midia);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.items.institucional);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.items.servicos);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", ctx.items.midia);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("innerHTML", ctx.items.copyright, i0.ɵɵsanitizeHtml);
    } }, directives: [i1.MdbIconComponent, i1.FasDirective, i2.RouterLinkWithHref, i3.SocialComponent, i4.MenuComponent], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: var(--color-blue-primary);\n  .copyright{\n    color: #fff !important;\n    background: rgba($color: #000000, $alpha: .25);\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, { items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=footer.component.js.map