import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@core/services/news.service";
import * as i3 from "@core/services/util.service";
import * as i4 from "@angular/common";
const _c0 = function (a2) { return ["/blog", "categoria", a2]; };
function BlogSidebarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, c_r1.slug));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", c_r1.name, " (", c_r1.count, ") ");
} }
export class BlogSidebarComponent {
    constructor(router, news, util) {
        this.router = router;
        this.news = news;
        this.util = util;
        this.category = [];
    }
    ngOnInit() {
        this.Category();
    }
    Category() {
        const query = 'categories?orderby=count&order=desc&per_page=10';
        this.news.getBlogCollection(query).subscribe(res => this.category = res.body);
    }
    onSearch(ev) {
        if (ev.keyCode === 13) {
            return this.router.navigate(['blog', 'search', this.util.toSlug(ev.target.value)]);
        }
    }
}
BlogSidebarComponent.ɵfac = function BlogSidebarComponent_Factory(t) { return new (t || BlogSidebarComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.NewsService), i0.ɵɵdirectiveInject(i3.UtilService)); };
BlogSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlogSidebarComponent, selectors: [["app-blog-sidebar"]], decls: 13, vars: 1, consts: [[1, "mb-5"], [1, "search", "mb-5"], [1, "titulo"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "keyup"], [1, "categories"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fas", "fa-tag", "mr-1", "text-muted"]], template: function BlogSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "aside", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h2");
        i0.ɵɵtext(4, "Busca");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "input", 4);
        i0.ɵɵlistener("keyup", function BlogSidebarComponent_Template_input_keyup_6_listener($event) { return ctx.onSearch($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵelementStart(9, "h2");
        i0.ɵɵtext(10, "Categorias");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ul", 6);
        i0.ɵɵtemplate(12, BlogSidebarComponent_li_12_Template, 4, 5, "li", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.category);
    } }, directives: [i4.NgForOf, i1.RouterLinkWithHref], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: .75rem;\n  border-bottom: 1px solid #e2e2e2;\n  h2{\n    margin-bottom: 0px;\n    font-weight: 700;\n  }\n}\n\n.categories[_ngcontent-%COMP%] {\n  ul{\n    li{\n      min-height: 50px;\n      a{\n        font-size: 1.2rem;\n      }\n    }\n  }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'app-blog-sidebar',
                templateUrl: './blog-sidebar.component.html',
                styleUrls: ['./blog-sidebar.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.NewsService }, { type: i3.UtilService }]; }, null); })();
//# sourceMappingURL=blog-sidebar.component.js.map