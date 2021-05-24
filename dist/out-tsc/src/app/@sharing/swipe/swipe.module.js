import { __decorate } from "tslib";
import { ImageModule } from './../image/image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwipeComponent } from './swipe.component';
let SwipeModule = class SwipeModule {
};
SwipeModule = __decorate([
    NgModule({
        declarations: [SwipeComponent],
        exports: [SwipeComponent],
        imports: [
            SwiperModule,
            CommonModule,
            ImageModule,
        ]
    })
], SwipeModule);
export { SwipeModule };
//# sourceMappingURL=swipe.module.js.map