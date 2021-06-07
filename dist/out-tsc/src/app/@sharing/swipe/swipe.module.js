import { ImageModule } from './../image/image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwipeComponent } from './swipe.component';
import * as i0 from "@angular/core";
export class SwipeModule {
}
SwipeModule.ɵmod = i0.ɵɵdefineNgModule({ type: SwipeModule });
SwipeModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SwipeModule_Factory(t) { return new (t || SwipeModule)(); }, imports: [[
            SwiperModule,
            CommonModule,
            ImageModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SwipeModule, { declarations: [SwipeComponent], imports: [SwiperModule,
        CommonModule,
        ImageModule], exports: [SwipeComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SwipeModule, [{
        type: NgModule,
        args: [{
                declarations: [SwipeComponent],
                exports: [SwipeComponent],
                imports: [
                    SwiperModule,
                    CommonModule,
                    ImageModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=swipe.module.js.map