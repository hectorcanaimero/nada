import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSliderComponent } from './blog-slider.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';
import { SwiperModule } from 'swiper/angular';
import * as i0 from "@angular/core";
export class BlogSliderModule {
}
BlogSliderModule.ɵmod = i0.ɵɵdefineNgModule({ type: BlogSliderModule });
BlogSliderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BlogSliderModule_Factory(t) { return new (t || BlogSliderModule)(); }, imports: [[
            CommonModule,
            SwipeModule,
            SwiperModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BlogSliderModule, { declarations: [BlogSliderComponent], imports: [CommonModule,
        SwipeModule,
        SwiperModule,
        DirectiveModule,
        MDBBootstrapModule], exports: [BlogSliderComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogSliderModule, [{
        type: NgModule,
        args: [{
                declarations: [BlogSliderComponent],
                exports: [BlogSliderComponent],
                imports: [
                    CommonModule,
                    SwipeModule,
                    SwiperModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=blog-slider.module.js.map