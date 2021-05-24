import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSliderComponent } from './blog-slider.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';
import { SwiperModule } from 'swiper/angular';
let BlogSliderModule = class BlogSliderModule {
};
BlogSliderModule = __decorate([
    NgModule({
        declarations: [BlogSliderComponent],
        exports: [BlogSliderComponent],
        imports: [
            CommonModule,
            SwipeModule,
            SwiperModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]
    })
], BlogSliderModule);
export { BlogSliderModule };
//# sourceMappingURL=blog-slider.module.js.map