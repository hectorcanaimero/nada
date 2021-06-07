import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay, A11y, Lazy } from "swiper/core";
import * as i0 from "@angular/core";
import * as i1 from "@core/services/blog.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "swiper/angular";
function BlogSliderComponent_div_0_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function BlogSliderComponent_div_0_5_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const item_r4 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onBlogId(item_r4.slug); });
    i0.ɵɵelement(1, "img", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "p", 14);
    i0.ɵɵelement(4, "i", 15);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r4.large, i0.ɵɵsanitizeUrl)("alt", item_r4.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 4, item_r4.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.title);
} }
function BlogSliderComponent_div_0_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BlogSliderComponent_div_0_5_ng_template_0_Template, 9, 7, "ng-template", 10);
} }
function BlogSliderComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("click", function BlogSliderComponent_div_0_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const item_r10 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onBlogId(item_r10.slug); });
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelement(2, "img", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵelementStart(4, "p", 14);
    i0.ɵɵelement(5, "i", 15);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 19);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r10.thumbnail, i0.ɵɵsanitizeUrl)("alt", item_r10.titulo);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 4, item_r10.date, "dd/MM/yyyy"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.title);
} }
function BlogSliderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "swiper", 5);
    i0.ɵɵlistener("slideChange", function BlogSliderComponent_div_0_Template_swiper_slideChange_4_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSlideChange($event); });
    i0.ɵɵtemplate(5, BlogSliderComponent_div_0_5_Template, 1, 0, undefined, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, BlogSliderComponent_div_0_div_8_Template, 10, 7, "div", 9);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("config", ctx_r0.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", items_r1)("ngForTrackBy", ctx_r0.trackByFunction);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 4, ctx_r0.items$));
} }
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay, A11y, Lazy]);
export class BlogSliderComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.slide = 0;
        this.options = {
            loop: true,
            lazy: true,
            speed: 1000,
            freemode: true,
            navigation: true,
            autoplay: { delay: 2000 },
            pagination: { clickable: true },
            fadeEffect: { crossFade: true },
        };
        this.onSlideChange = (ev) => this.slide = ev.realIndex;
        this.trackByFunction = (index, item) => item[index];
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        this.items$ = this.db.getPosts(1, 4).pipe(map((res) => res.body));
    }
}
BlogSliderComponent.ɵfac = function BlogSliderComponent_Factory(t) { return new (t || BlogSliderComponent)(i0.ɵɵdirectiveInject(i1.BlogService), i0.ɵɵdirectiveInject(i2.Router)); };
BlogSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlogSliderComponent, selectors: [["app-blog-slider"]], decls: 2, vars: 3, consts: [["class", "sliders", 4, "ngIf"], [1, "sliders"], [1, "row", "no-gutters"], [1, "col-md-7", "col-lg-8"], [1, "cards"], ["effect", "fade", 3, "config", "slideChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-5", "col-lg-4", "align-self-center"], [1, "list"], ["class", "line", 3, "click", 4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "banner", 3, "click"], [1, "img-fluid", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "line", 3, "click"], [1, "image"], [1, "w-100", 3, "src", "alt"], [1, "title"]], template: function BlogSliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BlogSliderComponent_div_0_Template, 10, 6, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.items$));
    } }, directives: [i3.NgIf, i4.SwiperComponent, i3.NgForOf, i4.SwiperSlideDirective], pipes: [i3.AsyncPipe, i3.DatePipe], styles: [".cards {\n  padding: 5px;\n  border-radius: 10px;\n  .banner {\n    cursor: pointer;\n    position: relative;\n    img {\n      border-radius: 10px;\n    }\n    .content {\n      width: 100%;\n      height: 100px;\n      padding: 1rem;\n      border-radius: 0 0 10px 10px;\n      position: absolute;\n      bottom: 0;\n      background-color: rgba($color: #000000, $alpha: .45);\n      .date {\n        font-size: .7rem;\n        color: #fafafa !important;\n        margin-bottom: 0px;\n      }\n      h2 {\n        font-size: 1.5rem;\n        color: #fff;\n        font-weight: 700;\n        margin-bottom: 0px;\n      }\n    }\n  }\n}\n\n.shadow {\n  background-color: var(--color-red-primary) !important;\n  border-radius: 5px;\n  color: #fafafa !important;\n  .date{\n    color: #fafafa !important;\n  }\n}\n\n.list {\n  margin: 0 .5rem;\n  .line {\n    cursor: pointer;\n    flex: row;\n    display: flex;\n    align-items: center;\n    padding: .5rem;\n    border-bottom: 1px solid #e2e2e2;\n    margin-bottom: .5rem;\n    &:last-child {\n      border-bottom: 0px solid #e2e2e2;\n      margin-bottom: 0px;\n      padding-bottom: 0px;\n    }\n    .image {\n      width: 20%;\n      img{\n        border-radius: 10px;\n      }\n    }\n    .content {\n      width: 80%;\n      padding-left: .5rem;\n      .date {\n        font-size: .8rem;\n        margin-bottom: .15rem;\n        color: #686868;\n      }\n      .title {\n        margin-bottom: 0;\n        font-size: 1rem;\n        text-align: justify;\n      }\n    }\n  }\n}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogSliderComponent, [{
        type: Component,
        args: [{
                selector: 'app-blog-slider',
                templateUrl: './blog-slider.component.html',
                styleUrls: ['./blog-slider.component.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.BlogService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=blog-slider.component.js.map