import { Component } from '@angular/core';
import { tap, map, delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/seo.service";
import * as i2 from "@core/services/news.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../../../@sharing/sidebar/sidebar.component";
import * as i6 from "../../../@sharing/sem-data/sem-data.component";
function DetailComponent_section_0_img_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("src", item_r3["full"], i0.ɵɵsanitizeUrl)("alt", item_r3.title);
} }
function DetailComponent_section_0_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 16);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵproperty("alt", item_r3.title);
} }
function DetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "h1", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementStart(7, "p", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 9);
    i0.ɵɵtemplate(10, DetailComponent_section_0_img_10_Template, 1, 2, "img", 10);
    i0.ɵɵtemplate(11, DetailComponent_section_0_img_11_Template, 1, 1, "img", 11);
    i0.ɵɵelement(12, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 13);
    i0.ɵɵelement(14, "img", 14);
    i0.ɵɵelement(15, "app-sidebar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3.full);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r3.full);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", item_r3.content, i0.ɵɵsanitizeHtml);
} }
function DetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-sem-data");
} }
export class DetailComponent {
    constructor(seo, news, act) {
        this.seo = seo;
        this.news = news;
        this.act = act;
        this.items$ = [];
        this.getPost = (slug) => {
            this.items$ = this.news.PostSlug(slug).pipe(tap((res) => this.setSeo(res)), delay(1000));
        };
        this.setSeo = (item) => {
            this.seo.updateTags({ title: item.title, description: item.content, image: item.medium });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getPost(data));
    }
    ngOnInit() { }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(i0.ɵɵdirectiveInject(i1.SeoService), i0.ɵɵdirectiveInject(i2.NewsService), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
DetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailComponent, selectors: [["app-detail"]], decls: 4, vars: 4, consts: [["id", "conteudo", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "conteudo", 1, "py-5"], [1, "container"], [1, "b-08", "border-bottom", "pb-1", "mb-3", "text-left"], [1, "row", "ios", "justify-content-center"], [1, "view", "overlay", "mb-5"], [1, "mask", "flex-center", "rgba-green-slight"], [1, "white-text"], [1, "col-lg-8", "col-xl-9"], ["class", "w-100", 3, "src", "alt", 4, "ngIf"], ["class", "w-100", "src", "./assets/images/sem-imagem.jpg", 3, "alt", 4, "ngIf"], ["id", "conteudo", 1, "mt-4", 3, "innerHTML"], [1, "col-lg-4", "col-xl-3", "bg-red"], ["src", "./assets/images/banner_imprensa.jpg", "alt", "Imprensa", 1, "img-fluid", "mb-4"], [1, "w-100", 3, "src", "alt"], ["src", "./assets/images/sem-imagem.jpg", 1, "w-100", 3, "alt"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DetailComponent_section_0_Template, 16, 5, "section", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, DetailComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [i4.NgIf, i5.SidebarComponent, i6.SemDataComponent], pipes: [i4.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DetailComponent, [{
        type: Component,
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return [{ type: i1.SeoService }, { type: i2.NewsService }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=detail.component.js.map