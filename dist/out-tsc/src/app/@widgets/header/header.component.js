import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/util.service";
import * as i3 from "@angular/common";
import * as i4 from "../../@sharing/link/link.component";
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵelement(1, "app-link", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r1);
} }
const _c0 = function () { return [""]; };
export class HeaderComponent {
    constructor(router, util) {
        this.router = router;
        this.util = util;
        this.items = [];
        this.keyword = 'loja';
        this.loja = [];
        this.getSearch = (event) => {
            if (event.keyCode === 13)
                this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
        };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.loja = this.util.StorageParse('Loja');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UtilService)); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], inputs: { items: "items" }, decls: 15, vars: 4, consts: [[1, "d-none", "d-lg-block"], ["id", "heade", 1, "pt-3", "pb-2", "header-B"], [1, "container"], [1, "row"], [1, "col-10", "col-md-11", "col-lg-3", "col-xl-3", "align-self-center"], [3, "routerLink"], ["src", "./assets/images/logo.svg", "alt", "Logo Condor", 1, "logo", "mx-auto", "d-block"], [1, "col-md-6", "col-lg-4", "d-none", "d-xl-block", "align-self-center"], ["type", "text", "placeholder", "O que voc\u00EA est\u00E1 procurando?", 1, "form-control", "rounded-pill", "px-2", 3, "keyup"], [1, "col-7", "col-md-3", "col-lg-9", "col-xl-5", "d-none", "d-lg-block"], [1, "nav", "justify-content-end", 2, "margin-top", "-5px!important"], ["class", "nav-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "justify-content-center", "d-none", "d-lg-block", "d-xl-none"], [1, "col-md-12"], [1, "nav-item"], [1, "nav-link", "white-text", "px-1", "b-06", "f-08", "text-center", "i-cartao", 3, "item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "a", 5);
        i0.ɵɵelement(6, "img", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵelementStart(8, "input", 8);
        i0.ɵɵlistener("keyup", function HeaderComponent_Template_input_keyup_8_listener($event) { return ctx.getSearch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "ul", 10);
        i0.ɵɵtemplate(11, HeaderComponent_li_11_Template, 2, 1, "li", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 12);
        i0.ɵɵelementStart(13, "div", 13);
        i0.ɵɵelementStart(14, "input", 8);
        i0.ɵɵlistener("keyup", function HeaderComponent_Template_input_keyup_14_listener($event) { return ctx.getSearch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c0));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.items.buttom)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [i1.RouterLinkWithHref, i3.NgForOf, i4.LinkComponent], styles: [".bg-mega[_ngcontent-%COMP%] { background-color: var(--color-default--background); }\n.header-A[_ngcontent-%COMP%] { background: var(--color-blue-primary); }\n.header-B[_ngcontent-%COMP%] { background: var(--color-blue-secondary); }\n\n.py-N[_ngcontent-%COMP%] {\n  padding-right: 0.3rem !important;\n  padding-left: 0.3rem !important;\n  padding-top: 0.2rem !important;\n  padding-bottom: 0.2rem !important;\n}\n\n//[_ngcontent-%COMP%]   Header[_ngcontent-%COMP%]   Memu\n.header-menu[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 0.8rem;\n  margin-bottom: 0px !important;\n}\n\n.letter-n-2[_ngcontent-%COMP%] { letter-spacing: -2px; }\n.i-cartao[_ngcontent-%COMP%] { margin-right: .5rem !important; }\n#hovers[_ngcontent-%COMP%]:hover { background: rgba(0, 0, 0, 0.25) !important; }\n\n.logo[_ngcontent-%COMP%]{\n  height: 40px;\n}\n\n\n@media (max-width: 1024px) {\n  .i-cartao[_ngcontent-%COMP%] {\n      margin-right: 0.7rem !important;\n      span { font-size: 0.7rem; }\n  }\n  .header-menu[_ngcontent-%COMP%] { font-size: 0.7rem; }\n}\n\n@media(max-width: 768px) {\n  .logo[_ngcontent-%COMP%]{\n      height: 30px;\n      margin-top: -7px;\n  }\n}\n\n@media(max-width: 576px) {\n  .logo[_ngcontent-%COMP%]{\n      height: 30px;\n      margin-top: -7px;\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.UtilService }]; }, { items: [{
            type: Input
        }] }); })();
//# sourceMappingURL=header.component.js.map