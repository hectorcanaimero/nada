import { Component, } from '@angular/core';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/blog.service";
import * as i3 from "@angular/common";
import * as i4 from "../../@widgets/blog-slider/blog-slider.component";
import * as i5 from "../../@widgets/blog-list/blog-list.component";
import * as i6 from "../../@widgets/blog-latest/blog-latest.component";
import * as i7 from "../../@widgets/blog-sidebar/blog-sidebar.component";
import * as i8 from "../../@sharing/sem-data/sem-data.component";
function BlogComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelement(3, "app-blog-slider");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelement(6, "app-blog-list", 7);
    i0.ɵɵelement(7, "app-blog-latest", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 9);
    i0.ɵɵelement(9, "app-blog-sidebar");
    i0.ɵɵelement(10, "app-blog-list", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("categoria", 23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r0.items$);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("tag", 206);
} }
function BlogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class BlogComponent {
    constructor(seo, db) {
        this.seo = seo;
        this.db = db;
        this.getSeo = () => {
            this.seo.addCanonical();
            this.seo.updateTags({
                title: 'Blog Condor | Receitas, Dicas de Economia e Muito Mais',
                description: 'Confira no Blog Condor: Receitas para seu Dia a Dia, Dicas de Economia, Limpeza, Decoração e Mais',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.dataLayerPage('Blog');
        };
    }
    ngOnInit() {
        this.getSeo();
        this.items$ = this.db.getPosts(1, 6).pipe(delay(1000));
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.BlogService)); };
BlogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlogComponent, selectors: [["app-blog"]], decls: 4, vars: 4, consts: [["id", "blog", "class", "my-4", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "blog", 1, "my-4"], [1, "container"], [1, "mb-5"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-8"], ["type", "media", "titulo", "Receitas", 3, "categoria"], ["titulo", "\u00DAltimos Posts", 3, "data"], [1, "col-md-6", "col-lg-4"], ["titulo", "Dicas da Familia", 3, "tag"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BlogComponent_section_0_Template, 11, 3, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, BlogComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i4.BlogSliderComponent, i5.BlogListComponent, i6.BlogLatestComponent, i7.BlogSidebarComponent, i8.SemDataComponent], pipes: [i3.AsyncPipe], styles: ["@import '../../../variable.scss';\n\n.item[_ngcontent-%COMP%] {\n    position: relative;\n    transition: transform .2s;\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);\n    min-height: 310px;\n    .text-blog { color: $red-alpha }\n    .item-body {\n        padding: 1rem .5rem;\n        .date{\n            letter-spacing: .2px;\n            color: $red-alpha;\n            font-weight: 600;\n            font-size: .7rem;\n            margin-bottom: 0 !important;\n        }\n        h1{\n            font-size: 1.1rem;\n            font-weight: 700;\n\n            a{\n                text-decoration: none !important;\n                &:hover {\n                    color: $red-alpha;\n                }\n            }\n        }\n        .item-tags{\n            .bag { \n                font-size: .70rem;\n                margin: 0 .2rem;\n                cursor: pointer;\n            }\n        }\n    }\n    .item-footer {\n        width: 100%;\n        position: absolute;\n        bottom: .5rem;\n        padding: .5rem;\n        .button-condor {\n            text-decoration: none !important;\n            text-align: center;\n            color: #505050;\n            font-size: .8rem;\n            width: 100%;\n            font-weight: 700;\n        }\n    }\n    &:hover {\n        transform: scale(1.06);\n        box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.15);\n    }\n}\n\n@media(max-width: 450px) {\n    .item[_ngcontent-%COMP%]{\n        height: auto;;\n    }\n    .container[_ngcontent-%COMP%] {\n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogComponent, [{
        type: Component,
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.BlogService }]; }, null); })();
//# sourceMappingURL=blog.component.js.map