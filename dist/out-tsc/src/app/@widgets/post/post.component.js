import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
import * as i3 from "../../@sharing/titulo/titulo.component";
import * as i4 from "@angular/router";
import * as i5 from "angular-bootstrap-md";
const _c0 = function (a1) { return ["/blog", a1]; };
function PostComponent_section_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "mdb-card");
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵelement(3, "img", 10);
    i0.ɵɵelementStart(4, "a", 11);
    i0.ɵɵelement(5, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mdb-card-body");
    i0.ɵɵelementStart(7, "mdb-card-title");
    i0.ɵɵelementStart(8, "h5", 13);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mdb-card-text", 14);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", post_r3.medium, i0.ɵɵsanitizeUrl)("alt", post_r3.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, post_r3.slug));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(post_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", post_r3.title, "");
} }
const _c1 = function () { return ["/blog"]; };
function PostComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "app-titulo", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtemplate(4, PostComponent_section_0_div_4_Template, 12, 7, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "a", 7);
    i0.ɵɵtext(7, " Ver todos os posts ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", items_r1)("ngForTrackBy", ctx_r0.trackByFunction);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c1));
} }
export class PostComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items$ = this.db.Blog(1, 4).pipe(map(res => res.body));
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
PostComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PostComponent, selectors: [["app-widget-post"]], decls: 2, vars: 3, consts: [["id", "blogger", "class", "py-3", 4, "ngIf"], ["id", "blogger", 1, "py-3"], [1, "container"], ["icon", "fas fa-rss", "titulo", "Nosso Blog"], [1, "row", "ios", "mb-4"], ["class", "col-sm-3 col-md-3 mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center"], ["mdbBtn", "", "color", "condor", "mdbWavesEffect", "", 1, "rounded-pill", 3, "routerLink"], [1, "col-sm-3", "col-md-3", "mb-3"], ["mdbWavesEffect", "", 1, "view", "rgba-white-slight", "waves-light"], ["LazyLoad", "", 1, "w-100", 3, "src", "alt"], [3, "routerLink"], [1, "mask"], [1, "b-07"], [1, "d-md-none"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PostComponent_section_0_Template, 8, 4, "section", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items$));
    } }, directives: [i2.NgIf, i3.TituloComponent, i2.NgForOf, i4.RouterLinkWithHref, i5.MdbBtnDirective, i5.WavesDirective, i5.MdbCardComponent, i5.MdbCardBodyComponent, i5.MdbCardTitleComponent, i5.MdbCardTextComponent], pipes: [i2.AsyncPipe], styles: [".card-body[_ngcontent-%COMP%] {\n    height: 120px;\n    padding: 1.25rem .75rem;\n}\n\n\n@media(max-width: 768px) {\n    h5[_ngcontent-%COMP%]{ font-size: 1.25rem; }\n    .b-07[_ngcontent-%COMP%] { font-weight: 600 !important; }\n    .card-body[_ngcontent-%COMP%] {\n        height: 180px;\n        padding: 1.25rem .75rem;\n    }\n}\n\n\n@media(max-width: 450px) {\n    .card-body[_ngcontent-%COMP%] {\n        height: auto;\n        padding: .5rem;\n    }\n}\n\n\n@media(max-width: 767px) and (orientation: landscape) {\n    #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] { \n        min-width: 100% !important;\n    }\n}\n\n\n@media(max-width: 450px) {\n    #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%] { \n        padding-left: 0px !important;\n        padding-right: 0px !important;\n    }\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PostComponent, [{
        type: Component,
        args: [{
                selector: 'app-widget-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=post.component.js.map