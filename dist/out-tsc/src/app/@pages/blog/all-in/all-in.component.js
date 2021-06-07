import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/blog.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "ngx-pagination";
import * as i5 from "../../../@widgets/blog-sidebar/blog-sidebar.component";
import * as i6 from "../../../@sharing/sem-data/sem-data.component";
function AllInComponent_section_0_h1_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h1", 12);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.titulo, i0.ɵɵsanitizeHtml);
} }
const _c0 = function (a1) { return ["/blog", a1]; };
function AllInComponent_section_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "a", 15);
    i0.ɵɵelement(3, "img", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelementStart(5, "p", 18);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h1");
    i0.ɵɵelementStart(9, "a", 19);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 20);
    i0.ɵɵelementStart(12, "div", 21);
    i0.ɵɵelementStart(13, "div", 22);
    i0.ɵɵelementStart(14, "a", 23);
    i0.ɵɵtext(15, " Ler mais >> ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(9, _c0, item_r6.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r6.medium, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 6, item_r6.date, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, item_r6.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.title);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, item_r6.slug));
} }
const _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllInComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵtemplate(4, AllInComponent_section_0_h1_4_Template, 1, 1, "h1", 6);
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtemplate(6, AllInComponent_section_0_div_6_Template, 16, 15, "div", 8);
    i0.ɵɵpipe(7, "paginate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelementStart(9, "pagination-controls", 10);
    i0.ɵɵlistener("pageChange", function AllInComponent_section_0_Template_pagination_controls_pageChange_9_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.pageChanged($event); })("pageBoundsCorrection", function AllInComponent_section_0_Template_pagination_controls_pageBoundsCorrection_9_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.pageChanged($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 11);
    i0.ɵɵelement(11, "app-blog-sidebar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.titulo);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(7, 2, items_r3, i0.ɵɵpureFunction3(5, _c1, ctx_r0.itemsPerPage, ctx_r0.currentPage, ctx_r0.totalItems)));
} }
function AllInComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class AllInComponent {
    constructor(db, act) {
        this.db = db;
        this.act = act;
        this.id = '';
        this.slug = '';
        this.titulo = '';
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.type = [];
        this.process = (type, slug, page = 1) => {
            console.log(page);
            this.id = type;
            this.slug = slug;
            if (type === 'categoria') {
                return this.getCategories(slug, page);
            }
            else if (type === 'tag') {
                return this.getTags(slug, page);
            }
            else {
                return this.getSearch(slug, page);
            }
        };
        this.getCategories = (slug, page) => {
            this.db.getCategoriesSlug(slug).subscribe((type) => {
                this.type = type;
                this.titulo = `Categoria: ${type.name}`;
                this.items$ = this.db.getPostsCategories(type.id, page, this.itemsPerPage).pipe(tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
            });
        };
        this.getTags = (slug, page) => {
            this.db.getTagSlug(slug).subscribe((type) => {
                this.type = type;
                this.titulo = `Etiqueta: ${type.name}`;
                this.items$ = this.db.getPostsTags(type.id, this.itemsPerPage).pipe(tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
            });
        };
        this.pageChanged = (ev) => {
            this.currentPage = ev++;
            this.process(this.id, this.slug, this.currentPage);
        };
    }
    ngOnInit() {
        this.first$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('first')));
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.first$.subscribe(type => this.slug$.subscribe(slug => this.process(type, slug)));
    }
    getSearch(slug, page) {
        const text = slug.split('-').join('%20');
        this.items$ = this.db.getPostSearch(text, page).pipe(tap((res) => {
            this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4];
            this.titulo = `Resultado da busca por <b>"${slug}"</b> (${this.totalItems})`;
        }), map((res) => res.body));
    }
}
AllInComponent.ɵfac = function AllInComponent_Factory(t) { return new (t || AllInComponent)(i0.ɵɵdirectiveInject(i1.BlogService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
AllInComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AllInComponent, selectors: [["app-all-in"]], decls: 4, vars: 4, consts: [["id", "Blog", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "Blog"], ["id", "Conteudo", 1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-md-9"], ["class", "message", 3, "innerHtml", 4, "ngIf"], [1, "row", "no-gutters"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-3"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange", "pageBoundsCorrection"], [1, "col", "md-3"], [1, "message", 3, "innerHtml"], [1, "col-md-6", "col-lg-4"], [1, "item", "m-2", "rounded"], [3, "routerLink"], ["LazyLoad", "", "alt", "", 1, "w-100", "rounded-top", 3, "src"], [1, "item-body"], [1, "date"], ["routerLinkActive", "router-link-active", 1, "text-muted", 3, "routerLink"], [1, "item-footer"], [1, "row", "justify-content-end"], [1, "col-6", "text-center"], [1, "button-condor", "text-muted", 3, "routerLink"]], template: function AllInComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AllInComponent_section_0_Template, 12, 9, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, AllInComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.PaginationControlsComponent, i5.BlogSidebarComponent, i2.RouterLinkWithHref, i2.RouterLinkActive, i6.SemDataComponent], pipes: [i3.AsyncPipe, i4.PaginatePipe, i3.DatePipe], styles: ["@import '../../../../variable.scss';\n\n\n.message[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n    text-transform: capitalize !important;\n}\n\n.item[_ngcontent-%COMP%] {\n    position: relative;\n    transition: transform .2s;\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n    min-height: 310px;\n    .text-blog { color: $red-alpha }\n    .item-body {\n        padding: 1rem .5rem;\n        .date{\n            letter-spacing: .2px;\n            color: $red-alpha;\n            font-weight: 600;\n            font-size: .7rem;\n            margin-bottom: 0 !important;\n        }\n        h1{\n            font-size: 1.1rem;\n            font-weight: 700;\n\n            a{\n                text-decoration: none !important;\n                &:hover {\n                    color: $red-alpha;\n                }\n            }\n        }\n        .item-tags{\n            .bag { \n                font-size: .70rem;\n                margin: 0 .2rem;\n                cursor: pointer;\n            }\n        }\n    }\n    .item-footer {\n        width: 100%;\n        position: absolute;\n        bottom: .5rem;\n        padding: .5rem;\n        .button-condor {\n            text-decoration: none !important;\n            text-align: center;\n            color: #505050;\n            font-size: .8rem;\n            width: 100%;\n            font-weight: 700;\n        }\n    }\n    &:hover {\n        transform: scale(1.06);\n        box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.15);\n    }\n}\n\n@media(max-width: 450px) {\n    .item[_ngcontent-%COMP%]{\n        height: auto;;\n    }\n    .container[_ngcontent-%COMP%] {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AllInComponent, [{
        type: Component,
        args: [{
                selector: 'app-all-in',
                templateUrl: './all-in.component.html',
                styleUrls: ['./all-in.component.scss']
            }]
    }], function () { return [{ type: i1.BlogService }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=all-in.component.js.map