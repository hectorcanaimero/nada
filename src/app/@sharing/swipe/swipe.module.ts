import { ImageModule } from './../image/image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { SwipeComponent } from './swipe.component';

@NgModule({
  declarations: [SwipeComponent],
  exports: [SwipeComponent],
  imports: [
    SwiperModule,
    CommonModule,
    ImageModule,
  ]
})
export class SwipeModule { }
