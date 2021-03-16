import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';
import { OfertasComponent } from './ofertas.component';
@NgModule({
  declarations: [OfertasComponent],
  exports: [OfertasComponent],
  imports: [
    SwiperModule,
    HelperModule,
    RouterModule,
    CommonModule,
    CarouselModule,
    MDBBootstrapModule
  ]
})

export class OfertasModule { }
