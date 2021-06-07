import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/news.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../../@sharing/sidebar/sidebar.component";
import * as i6 from "../../@sharing/sem-data/sem-data.component";
import * as i7 from "../../@core/pipes/safe.pipe";
function NewsComponent_section_0_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const items_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("alt", items_r3.title);
} }
function NewsComponent_section_0_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 16);
} if (rf & 2) {
    const items_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("src", items_r3.full, i0.ɵɵsanitizeUrl)("alt", items_r3.title);
} }
function NewsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h1", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵelementStart(8, "p", 9);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵtemplate(11, NewsComponent_section_0_img_11_Template, 1, 1, "img", 11);
    i0.ɵɵtemplate(12, NewsComponent_section_0_img_12_Template, 1, 2, "img", 12);
    i0.ɵɵelement(13, "div", 13);
    i0.ɵɵpipe(14, "safe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 14);
    i0.ɵɵelement(16, "app-sidebar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(items_r3.title);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(items_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !items_r3.full);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", items_r3.full);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(14, 5, items_r3.content, "html"), i0.ɵɵsanitizeHtml);
} }
function NewsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class NewsComponent {
    constructor(seo, news, act) {
        this.seo = seo;
        this.news = news;
        this.act = act;
        this.getPost = (id) => this.items$ = this.news.PageSlug(id).pipe(tap((res) => {
            this.seo.addCanonical();
            this.seo.updateTags({ title: res.title, image: res.medium, description: res.content });
            this.seo.dataLayerPage(res.title);
        }), delay(1000));
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('id')));
        this.slug$.subscribe(data => this.getPost(`${data}`));
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.NewsService), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
NewsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NewsComponent, selectors: [["app-news"]], decls: 4, vars: 4, consts: [["id", "conteudo", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "conteudo", 1, "py-5"], [1, "container"], [1, "animate", "fadeIn"], [1, "b-08", "border-bottom", "pb-1", "mb-3"], [1, "row", "ios", "justify-content-center"], [1, "view", "overlay", "mb-5"], [1, "mask", "flex-center", "rgba-green-slight"], [1, "white-text"], [1, "col-lg-8", "col-xl-9"], ["src", "./assets/images/sem-imagem.jpg", "class", "w-100 mb-4", 3, "alt", 4, "ngIf"], ["class", "w-100 mb-4", 3, "src", "alt", 4, "ngIf"], ["id", "conteudo", 3, "innerHTML"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["src", "./assets/images/sem-imagem.jpg", 1, "w-100", "mb-4", 3, "alt"], [1, "w-100", "mb-4", 3, "src", "alt"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NewsComponent_section_0_Template, 17, 8, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, NewsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i4.NgIf, i5.SidebarComponent, i6.SemDataComponent], pipes: [i4.AsyncPipe, i7.SafePipe], styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 10px\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NewsComponent, [{
        type: Component,
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.NewsService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=news.component.js.map