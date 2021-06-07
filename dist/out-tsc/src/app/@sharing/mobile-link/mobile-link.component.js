import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideDownInOut } from '@core/animations/slide';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "angular-bootstrap-md";
function MobileLinkComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function MobileLinkComponent_div_6_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); const data_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onLink(data_r1.url || data_r1.slug); });
    i0.ɵɵelementStart(1, "p", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 2);
    i0.ɵɵelement(4, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r1.nome || data_r1.name, " ");
} }
export class MobileLinkComponent {
    constructor(router) {
        this.router = router;
        this.items = [];
        this.titulo = '';
        this.toogle = new EventEmitter();
        this.active = 'out';
        this.height = '0px';
        this.toogleSubMenu = () => {
            this.active = this.active === 'out' ? 'in' : 'out';
        };
        this.onLink = (slug) => {
            this.router.navigateByUrl(slug);
            this.toogle.emit('out');
        };
    }
}
MobileLinkComponent.ɵfac = function MobileLinkComponent_Factory(t) { return new (t || MobileLinkComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
MobileLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MobileLinkComponent, selectors: [["app-mobile-link"]], inputs: { items: "items", titulo: "titulo" }, outputs: { toogle: "toogle" }, decls: 7, vars: 4, consts: [[1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", 1, "item"], [1, "fas", "fa-angle-right", "float-right"]], template: function MobileLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function MobileLinkComponent_Template_div_click_0_listener() { return ctx.toogleSubMenu(); });
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelement(4, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, MobileLinkComponent_div_6_Template, 5, 1, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.titulo);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", ctx.active === "out" ? "fa-plus" : "fa-minus");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@slideDownInOut", ctx.active);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i2.NgClass, i2.NgForOf, i3.WavesDirective], styles: [".items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  font-size: .9rem;\n  align-items: center;\n  padding: .35rem .5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n  img {\n    width: 30px;\n    margin-right: 10px;\n  }\n  .item{\n    width: 90%;\n    margin-bottom: 0;\n  }\n  .icon {\n    width: 10%;\n    text-align: right;\n  }\n}\n\n.sub-menu-items[_ngcontent-%COMP%]{\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding: .35rem .5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n  .item {\n    width: 85%;\n    font-size: .8rem;\n    margin-bottom: 0;\n  }\n  .icon{\n    width: 15%;\n  }\n}"], data: { animation: [slideDownInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MobileLinkComponent, [{
        type: Component,
        args: [{
                selector: 'app-mobile-link',
                templateUrl: './mobile-link.component.html',
                styleUrls: ['./mobile-link.component.scss'],
                animations: [slideDownInOut]
            }]
    }], function () { return [{ type: i1.Router }]; }, { items: [{
            type: Input
        }], titulo: [{
            type: Input
        }], toogle: [{
            type: Output
        }] }); })();
//# sourceMappingURL=mobile-link.component.js.map