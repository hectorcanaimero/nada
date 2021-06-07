import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
import * as i3 from "../../@sharing/titulo/titulo.component";
import * as i4 from "@angular/router";
import * as i5 from "../../@core/pipes/sort.pipe";
const _c0 = function (a1) { return ["institucional", a1]; };
function InstitucionalComponent_section_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "a", 7);
    i0.ɵɵelementStart(2, "div", 8);
    i0.ɵɵelement(3, "img", 9);
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelementStart(5, "h3", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c0, item_r3.slug));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r3.medium, i0.ɵɵsanitizeUrl)("alt", item_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.title);
} }
function InstitucionalComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "app-titulo", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtemplate(4, InstitucionalComponent_section_0_div_4_Template, 7, 6, "div", 5);
    i0.ɵɵpipe(5, "sort");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(5, 2, items_r1, "id"))("ngForTrackBy", ctx_r0.trackByFunction);
} }
export class InstitucionalComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, items) => items[index];
    }
    ngOnInit() {
        const q = `?include[]=5&include[]=10&include[]=12&include[]=14`;
        this.items$ = this.db.PageCollection(q);
    }
}
InstitucionalComponent.ɵfac = function InstitucionalComponent_Factory(t) { return new (t || InstitucionalComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
InstitucionalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InstitucionalComponent, selectors: [["app-widget-institucional"]], decls: 2, vars: 3, consts: [["id", "PostInstitucional", "class", "py-3", 4, "ngIf"], ["id", "PostInstitucional", 1, "py-3"], [1, "container"], ["icon", "fas fa-newspaper", "titulo", "Condor. H\u00E1 47 anos faz parte da fam\u00EDlia"], [1, "row", "ios"], ["class", "col-12 col-sm-3 col-md-6 col-lg-3 mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12", "col-sm-3", "col-md-6", "col-lg-3", "mb-3"], [1, "text-muted", "b-06", 3, "routerLink"], [1, "view", "z-depth-3"], ["Lazy", "", 1, "w-100", 3, "src", "alt"], [1, "mask", "flex-center", "rgba-black-light", "cursor"], [1, "b-07", "white-text", "text-center", "text-shadow"]], template: function InstitucionalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, InstitucionalComponent_section_0_Template, 6, 5, "section", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items$));
    } }, directives: [i2.NgIf, i3.TituloComponent, i2.NgForOf, i4.RouterLinkWithHref], pipes: [i2.AsyncPipe, i5.SortPipe], styles: ["@media(max-width: 767px) and (orientation: landscape) {\n    #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] { \n        min-width: 100% !important;\n    }\n}\n\n\n@media(max-width: 450px) {\n    .col-sm-3[_ngcontent-%COMP%] { \n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InstitucionalComponent, [{
        type: Component,
        args: [{
                selector: 'app-widget-institucional',
                templateUrl: './institucional.component.html',
                styleUrls: ['./institucional.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=institucional.component.js.map