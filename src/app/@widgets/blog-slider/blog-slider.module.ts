import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSliderComponent } from './blog-slider.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';
import { SwiperModule } from 'swiper/angular';



@NgModule({
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
export class BlogSliderModule { }
