import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/news.service";
import * as i3 from "@angular/common";
import * as i4 from "ngx-pagination";
import * as i5 from "../../@sharing/sidebar/sidebar.component";
import * as i6 from "@angular/router";
import * as i7 from "../../@sharing/sem-data/sem-data.component";
const _c0 = function (a1) { return ["/institucional/imprensa", a1]; };
const _c1 = function (a0) { return { "background": a0 }; };
function ImprensaComponent_section_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "a", 15);
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelementStart(5, "h3", 18);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, item_r5.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, "url(" + item_r5.medium + ") no-repeat center center"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.title);
} }
const _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function ImprensaComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "h2", 4);
    i0.ɵɵtext(3, "Not\u00EDcias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtemplate(7, ImprensaComponent_section_0_div_7_Template, 7, 7, "div", 8);
    i0.ɵɵpipe(8, "paginate");
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵelementStart(10, "pagination-controls", 10);
    i0.ɵɵlistener("pageChange", function ImprensaComponent_section_0_Template_pagination_controls_pageChange_10_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.pageChanged($event); })("pageBoundsCorrection", function ImprensaComponent_section_0_Template_pagination_controls_pageBoundsCorrection_10_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.pageChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 11);
    i0.ɵɵelement(12, "img", 12);
    i0.ɵɵelement(13, "app-sidebar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(8, 1, items_r3, i0.ɵɵpureFunction3(4, _c2, ctx_r0.ip, ctx_r0.p, ctx_r0.header)));
} }
function ImprensaComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class ImprensaComponent {
    constructor(seo, news) {
        this.seo = seo;
        this.news = news;
        this.p = 1;
        this.ip = 6;
        this.getPost = (page) => {
            this.items$ = this.news.Posts(page, this.ip).pipe(tap((res) => this.header = res === null || res === void 0 ? void 0 : res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body), delay(1000));
        };
        this.pageChanged = (ev) => {
            this.p = ev;
            this.items$ = this.news.Posts(this.p, this.ip).pipe(map((res) => res.body));
        };
    }
    ngOnInit() {
        this.seo.addCanonical();
        this.seo.dataLayerPage('imprensa');
        this.getPost(this.p);
    }
}
ImprensaComponent.ɵfac = function ImprensaComponent_Factory(t) { return new (t || ImprensaComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.NewsService)); };
ImprensaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImprensaComponent, selectors: [["app-imprensa"]], decls: 4, vars: 4, consts: [["id", "imprensa", "class", "py-4", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "imprensa", 1, "py-4"], [1, "container"], [1, "h1-responsive", "font-weight-bold", "text-left", "border-bottom", "my-5"], [1, "row", "ios"], [1, "col-xl-9"], [1, "row"], ["class", "col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "mt-4", "mx-auto"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange", "pageBoundsCorrection"], [1, "col-xl-3"], ["src", "./assets/images/banner_imprensa.jpg", "alt", "Imprensa", 1, "img-fluid", "mb-4"], [1, "col-md-6", "mb-4"], [1, "cards"], [3, "routerLink"], [1, "image", 3, "ngStyle"], [1, "content"], [1, "titulo"]], template: function ImprensaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ImprensaComponent_section_0_Template, 14, 8, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ImprensaComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.PaginationControlsComponent, i5.SidebarComponent, i6.RouterLinkWithHref, i3.NgStyle, i7.SemDataComponent], pipes: [i3.AsyncPipe, i4.PaginatePipe], styles: [".cards[_ngcontent-%COMP%] {\n  .image{\n    position: relative;\n    height: 280px;\n    background-size: cover !important;\n    border-radius: 10px;\n    margin-bottom: 1rem;\n  }\n  .content {\n    bottom: 0;\n    display: flex;\n    min-height: 100px;\n    position: absolute;\n    padding: .6rem .85rem;\n    border-radius: 0 0 10px 10px;\n    background-color: rgba($color: #000000, $alpha: .50);\n    .titulo {\n      color: #fafafa;\n      font-weight: 600;\n      font-size: 1.3rem;\n      align-self: center;\n    }\n  }\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--color-text-default) !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImprensaComponent, [{
        type: Component,
        args: [{
                selector: 'app-imprensa',
                templateUrl: './imprensa.component.html',
                styleUrls: ['./imprensa.component.scss']
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.NewsService }]; }, null); })();
//# sourceMappingURL=imprensa.component.js.map