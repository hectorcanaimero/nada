import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@core/services/news.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "angular-bootstrap-md";
const _c0 = function (a1) { return ["/institucional/imprensa/", a1]; };
function SidebarComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r2 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, n_r2.slug));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", n_r2.title, " ");
} }
function SidebarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "img", 6);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "h6", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("alt", item_r3.title);
    i0.ɵɵproperty("src", item_r3.thumbnail, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", item_r3.content, i0.ɵɵsanitizeHtml);
} }
export class SidebarComponent {
    constructor(news) {
        this.news = news;
        this.trackById = (index, items) => items[index];
    }
    ngOnInit() {
        this.items$ = this.news.PageCollection(`?include[]=97&include[]=104`);
        this.noticias$ = this.news.LastNews(5);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1.NewsService)); };
SidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 10, vars: 8, consts: [[1, "news", "mb-3"], [1, "b-07", "border-bottom", "pb-1", "mb-3"], ["routerLinkActive", "router-link-active", "class", "waves-light f-09 b-07 text-muted pl-2 border-bottom pb-2 mb-2 text-justify", "mdbWavesEffect", "", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "media border-bottom pb-3 mb-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["routerLinkActive", "router-link-active", "mdbWavesEffect", "", 1, "waves-light", "f-09", "b-07", "text-muted", "pl-2", "border-bottom", "pb-2", "mb-2", "text-justify", 3, "routerLink"], [1, "media", "border-bottom", "pb-3", "mb-4"], [1, "d-flex", "mr-3", 3, "src", "alt"], [1, "media-body"], [1, "mt-0", "font-weight-bold"], [3, "innerHTML"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h5", 1);
        i0.ɵɵtext(2, "\u00DAltimas Noticias");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SidebarComponent_a_3_Template, 2, 4, "a", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 0);
        i0.ɵɵelementStart(6, "h5", 1);
        i0.ɵɵtext(7, "Joanir Zonta");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SidebarComponent_div_8_Template, 6, 4, "div", 3);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 4, ctx.noticias$))("ngForTrackBy", ctx.trackById);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 6, ctx.items$))("ngForTrackBy", ctx.trackById);
    } }, directives: [i2.NgForOf, i3.RouterLinkWithHref, i3.RouterLinkActive, i4.WavesDirective], pipes: [i2.AsyncPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: i1.NewsService }]; }, null); })();
//# sourceMappingURL=sidebar.component.js.map