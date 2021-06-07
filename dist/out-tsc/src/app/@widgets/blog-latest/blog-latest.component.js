import { Component, Input } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/blog.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "ngx-pagination";
import * as i5 from "../../@core/directives/lazy-load.directive";
import * as i6 from "../../@sharing/sem-data/sem-data.component";
function BlogLatestComponent_section_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵlistener("click", function BlogLatestComponent_section_0_div_5_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r7); const item_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onBlogId(item_r5.slug); });
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelement(3, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelementStart(5, "p", 13);
    i0.ɵɵelement(6, "i", 14);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r4.column);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", item_r5.large, i0.ɵɵsanitizeUrl)("alt", item_r5.titulo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 5, item_r5.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.title);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function BlogLatestComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, BlogLatestComponent_section_0_div_5_Template, 11, 8, "div", 5);
    i0.ɵɵpipe(6, "paginate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "pagination-controls", 7);
    i0.ɵɵlistener("pageChange", function BlogLatestComponent_section_0_Template_pagination_controls_pageChange_8_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.pageChanged($event); })("pageBoundsCorrection", function BlogLatestComponent_section_0_Template_pagination_controls_pageBoundsCorrection_8_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.pageChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.titulo);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(6, 2, items_r3, i0.ɵɵpureFunction3(5, _c0, ctx_r0.itemsPerPage, ctx_r0.currentPage, ctx_r0.totalItem)));
} }
function BlogLatestComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data", 16);
} }
export class BlogLatestComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.titulo = '';
        this.column = 'col-md-6';
        this.itemsPerPage = 6;
        this.currentPage = 1;
        this.totalItem = 0;
        this.pageChanged = (ev) => {
            this.currentPage = ev++;
            this.items$ = this.db.getPosts(this.currentPage, this.itemsPerPage).pipe(map((res) => res.body));
            console.log(this.currentPage);
        };
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        this.items$ = this.data.pipe(delay(300), tap((res) => this.totalItem = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
    }
}
BlogLatestComponent.ɵfac = function BlogLatestComponent_Factory(t) { return new (t || BlogLatestComponent)(i0.ɵɵdirectiveInject(i1.BlogService), i0.ɵɵdirectiveInject(i2.Router)); };
BlogLatestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlogLatestComponent, selectors: [["app-blog-latest"]], inputs: { data: "data", titulo: "titulo", column: "column" }, decls: 4, vars: 4, consts: [["id", "latest", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "latest"], [1, "titulo"], [1, "row", "no-gutters"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-3"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange", "pageBoundsCorrection"], [3, "ngClass"], [1, "cards", "px-1", 3, "click"], [1, "image"], ["LazyLoad", "", 1, "w-100", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title"], ["height", "40vh"]], template: function BlogLatestComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BlogLatestComponent_section_0_Template, 9, 9, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, BlogLatestComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.PaginationControlsComponent, i3.NgClass, i5.LazyLoadDirective, i6.SemDataComponent], pipes: [i3.AsyncPipe, i4.PaginatePipe, i3.DatePipe], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: .75rem;\n  border-bottom: 1px solid #e2e2e2;\n  h2{\n    margin-bottom: 0px;\n    font-weight: 700;\n  }\n}\n\n.cards[_ngcontent-%COMP%] {\n  cursor: pointer;\n  .image {\n    margin-bottom: 1rem;\n    img{\n      border-radius: 10px;\n    }\n  }\n  .content {\n    height: 130px;\n    .date {\n      font-size: .7rem;\n      margin-bottom: .15rem;\n      color: #686868;\n    }\n    .title {\n      font-size: 1.1rem;\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogLatestComponent, [{
        type: Component,
        args: [{
                selector: 'app-blog-latest',
                templateUrl: './blog-latest.component.html',
                styleUrls: ['./blog-latest.component.scss']
            }]
    }], function () { return [{ type: i1.BlogService }, { type: i2.Router }]; }, { data: [{
            type: Input
        }], titulo: [{
            type: Input
        }], column: [{
            type: Input
        }] }); })();
//# sourceMappingURL=blog-latest.component.js.map