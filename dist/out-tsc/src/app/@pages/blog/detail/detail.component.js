import { Component } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/blog.service";
import * as i2 from "@core/services/seo.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../../../@widgets/blog-sidebar/blog-sidebar.component";
import * as i6 from "../../../@widgets/blog-list/blog-list.component";
import * as i7 from "../../../@sharing/sem-data/sem-data.component";
import * as i8 from "../../../@core/pipes/safe.pipe";
function DetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "p", 4);
    i0.ɵɵelement(3, "i", 5);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h1", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelement(10, "img", 9);
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelement(12, "div", 11);
    i0.ɵɵpipe(13, "safe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵelement(15, "app-blog-sidebar");
    i0.ɵɵelement(16, "app-blog-list", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 6, items_r3.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(items_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("alt", items_r3.title);
    i0.ɵɵproperty("src", items_r3.large, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(13, 9, items_r3.content, "html"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("tag", 206);
} }
function DetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class DetailComponent {
    constructor(db, seo, act) {
        this.db = db;
        this.seo = seo;
        this.act = act;
        this.getPost = (slug) => {
            this.items$ = this.db.getPostSlug(slug).pipe(delay(1000));
        };
        this.getSeo = (item) => {
            this.seo.updateTags({ title: item.title, description: item.content, image: item.medium });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getPost(data));
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(i0.ɵɵdirectiveInject(i1.BlogService), i0.ɵɵdirectiveInject(i2.SeoService), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
DetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailComponent, selectors: [["app-detail"]], decls: 4, vars: 4, consts: [["id", "Post", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "Post", 1, "py-5"], [1, "container"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title", "mb-3"], [1, "row"], [1, "col-md-9"], [1, "img-fluid", "mb-3", 3, "src", "alt"], [1, "content", "mt-4", "mt-md-5"], ["id", "conteudo", 3, "innerHTML"], [1, "col-md-3"], ["titulo", "Dicas da Familia", 3, "tag"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DetailComponent_section_0_Template, 17, 12, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, DetailComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i4.NgIf, i5.BlogSidebarComponent, i6.BlogListComponent, i7.SemDataComponent], pipes: [i4.AsyncPipe, i4.DatePipe, i8.SafePipe], styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.text-blog[_ngcontent-%COMP%] { color: var(--color-red-secondary) !important; }\n\n.title[_ngcontent-%COMP%]{\n    text-align: left;\n    font-size: 1.8rem;\n    font-weight: 800 !important;\n    margin-bottom: 0rem;\n}\n\n.item-tags[_ngcontent-%COMP%]{\n    .bag {\n        font-size: .95rem;\n        margin: 0 .2rem;\n        cursor: pointer;\n    }\n}\n\n.date[_ngcontent-%COMP%]{\n    letter-spacing: .2px;\n    color: var(--color-red-secondary);\n    font-weight: 600;\n    font-size: .9rem;\n    margin-bottom: 1rem !important;\n}\n\n.item[_ngcontent-%COMP%] {\n    position: relative;\n    transition: transform .2s;\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n    min-height: 310px;\n    .text-blog { color: var(--color-red-secondary) }\n    .item-body {\n        padding: 1rem .5rem;\n        .date{\n            letter-spacing: .2px;\n            color: var(--color-red-secondary);\n            font-weight: 600;\n            font-size: .7rem;\n            margin-bottom: 0 !important;\n        }\n        h1{\n            font-size: 1.1rem;\n            font-weight: 700;\n\n            a{\n                text-decoration: none !important;\n                &:hover {\n                    color: var(--color-red-secondary);\n                }\n            }\n        }\n        .item-tags{\n            .bag {\n                font-size: .70rem;\n                margin: 0 .2rem;\n                cursor: pointer;\n            }\n        }\n    }\n    .item-footer {\n        width: 100%;\n        position: absolute;\n        bottom: .5rem;\n        padding: .5rem;\n        .button-condor {\n            text-decoration: none !important;\n            text-align: center;\n            color: #505050;\n            font-size: .8rem;\n            width: 100%;\n            font-weight: 700;\n        }\n    }\n    &:hover {\n        transform: scale(1.06);\n        box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.15);\n    }\n}\n\n@media(max-width: 450px) {\n    .item[_ngcontent-%COMP%]{\n        height: auto;;\n    }\n    .container[_ngcontent-%COMP%] {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DetailComponent, [{
        type: Component,
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return [{ type: i1.BlogService }, { type: i2.SeoService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=detail.component.js.map