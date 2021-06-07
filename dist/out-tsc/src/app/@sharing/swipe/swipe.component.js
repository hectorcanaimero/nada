import { Component, Input } from '@angular/core';
import SwiperCore, { EffectFade, Navigation, Pagination, A11y, Lazy } from "swiper/core";
import * as i0 from "@angular/core";
import * as i1 from "swiper/angular";
import * as i2 from "@angular/common";
import * as i3 from "../image/image.component";
function SwipeComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-image", 3);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("code", item_r1)("idImage", ctx_r2.idImage)("size", ctx_r2.size);
} }
function SwipeComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SwipeComponent_1_ng_template_0_Template, 1, 3, "ng-template", 2);
} }
const _c0 = function () { return { clickable: true }; };
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);
export class SwipeComponent {
    constructor() {
        this.data = [];
        this.code = [];
        this.size = '';
        this.idImage = '';
        this.onSwiper = (swiper) => { };
        this.onSlideChange = () => { };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() { }
}
SwipeComponent.ɵfac = function SwipeComponent_Factory(t) { return new (t || SwipeComponent)(); };
SwipeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SwipeComponent, selectors: [["app-swipe"]], inputs: { data: "data", code: "code", size: "size", idImage: "idImage", options: "options" }, decls: 2, vars: 6, consts: [["effect", "fade", 3, "lazy", "navigation", "pagination", "swiper", "slideChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["swiperSlide", ""], [3, "code", "idImage", "size"]], template: function SwipeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "swiper", 0);
        i0.ɵɵlistener("swiper", function SwipeComponent_Template_swiper_swiper_0_listener($event) { return ctx.onSwiper($event); })("slideChange", function SwipeComponent_Template_swiper_slideChange_0_listener() { return ctx.onSlideChange(); });
        i0.ɵɵtemplate(1, SwipeComponent_1_Template, 1, 0, undefined, 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("lazy", true)("navigation", true)("pagination", i0.ɵɵpureFunction0(5, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [i1.SwiperComponent, i2.NgForOf, i1.SwiperSlideDirective, i3.ImageComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwipeComponent, [{
        type: Component,
        args: [{
                selector: 'app-swipe',
                templateUrl: './swipe.component.html',
                styleUrls: ['./swipe.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], code: [{
            type: Input
        }], size: [{
            type: Input
        }], idImage: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();
//# sourceMappingURL=swipe.component.js.map