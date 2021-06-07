import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/blog.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function BlogListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function BlogListComponent_div_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.onBlogId(item_r4.slug); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵelement(5, "i", 10);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r4.thumbnail, i0.ɵɵsanitizeUrl)("alt", item_r4.titulo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 4, item_r4.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BlogListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, BlogListComponent_div_3_div_1_Template, 10, 7, "div", 4);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r0.items$));
} }
function BlogListComponent_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function BlogListComponent_ng_template_4_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const item_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onBlogId(item_r9.slug); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵelement(5, "i", 10);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r9.large, i0.ɵɵsanitizeUrl)("alt", item_r9.titulo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 4, item_r9.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r9.title);
} }
function BlogListComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function BlogListComponent_ng_template_4_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r14); const item_r12 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onBlogId(item_r12.slug); });
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelement(2, "img", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵelementStart(4, "p", 9);
    i0.ɵɵelement(5, "i", 10);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r12.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 3, item_r12.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r12.title);
} }
function BlogListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "div", 13);
    i0.ɵɵelementStart(2, "div", 14);
    i0.ɵɵtemplate(3, BlogListComponent_ng_template_4_div_3_Template, 10, 7, "div", 15);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 16);
    i0.ɵɵelementStart(7, "div", 3);
    i0.ɵɵtemplate(8, BlogListComponent_ng_template_4_div_8_Template, 10, 6, "div", 4);
    i0.ɵɵpipe(9, "slice");
    i0.ɵɵpipe(10, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 2, i0.ɵɵpipeBind1(5, 6, ctx_r2.items$), 0, 1));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(9, 8, i0.ɵɵpipeBind1(10, 12, ctx_r2.items$), 1, 6));
} }
export class BlogListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.type = 'list';
        this.titulo = 'list';
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        if (this.categoria) {
            this.items$ = this.db.getPostsCategories(this.categoria, 5).pipe(map((res) => res.body));
        }
        else {
            this.items$ = this.db.getPostsTags(this.tag, 5).pipe(map((res) => res.body));
        }
    }
}
BlogListComponent.ɵfac = function BlogListComponent_Factory(t) { return new (t || BlogListComponent)(i0.ɵɵdirectiveInject(i1.BlogService), i0.ɵɵdirectiveInject(i2.Router)); };
BlogListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlogListComponent, selectors: [["app-blog-list"]], inputs: { tag: "tag", type: "type", categoria: "categoria", titulo: "titulo" }, decls: 6, vars: 3, consts: [[1, "titulo"], ["class", "list", 4, "ngIf", "ngIfElse"], ["media", ""], [1, "list"], ["class", "line", 3, "click", 4, "ngFor", "ngForOf"], [1, "line", 3, "click"], [1, "image"], [1, "w-100", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title"], [1, "media"], [1, "row"], [1, "col-md-7"], ["class", "cards", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "cards", 3, "click"], ["alt", "", 1, "w-100", 3, "src"]], template: function BlogListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, BlogListComponent_div_3_Template, 3, 3, "div", 1);
        i0.ɵɵtemplate(4, BlogListComponent_ng_template_4_Template, 11, 14, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.titulo);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "list")("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf], pipes: [i3.AsyncPipe, i3.DatePipe, i3.SlicePipe], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: .75rem;\n  border-bottom: 1px solid #e2e2e2;\n  h2{\n    margin-bottom: 0px;\n    font-weight: 700;\n  }\n}\n\n.list[_ngcontent-%COMP%] {\n  .line {\n    cursor: pointer;\n    flex: row;\n    display: flex;\n    align-items: center;\n    padding-bottom: .5rem;\n    border-bottom: 1px solid #e2e2e2;\n    margin-bottom: .5rem;\n    &:last-child {\n      border-bottom: 0px solid #e2e2e2;\n    }\n    .image {\n      width: 20%;\n      img{\n        border-radius: 10px;\n      }\n    }\n    .content {\n      width: 80%;\n      padding-left: .5rem;\n      .date {\n        font-size: .8rem;\n        margin-bottom: .15rem;\n        color: #686868;\n      }\n      .title {\n        margin-bottom: 0;\n        font-size: 1rem;\n        text-align: justify;\n      }\n    }\n  }\n}\n\n.media[_ngcontent-%COMP%] {\n  .cards {\n    cursor: pointer;\n    .image {\n      margin-bottom: 1rem;\n      img{\n        border-radius: 10px;\n      }\n    }\n    .content {\n      .date {\n        font-size: .7rem;\n        margin-bottom: .15rem;\n        color: #686868;\n      }\n      .title {\n        font-size: 1.1rem;\n      }\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogListComponent, [{
        type: Component,
        args: [{
                selector: 'app-blog-list',
                templateUrl: './blog-list.component.html',
                styleUrls: ['./blog-list.component.scss']
            }]
    }], function () { return [{ type: i1.BlogService }, { type: i2.Router }]; }, { tag: [{
            type: Input
        }], type: [{
            type: Input
        }], categoria: [{
            type: Input
        }], titulo: [{
            type: Input
        }] }); })();
//# sourceMappingURL=blog-list.component.js.map