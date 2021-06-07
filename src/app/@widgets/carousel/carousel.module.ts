import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ResponsiveModule } from 'ngx-responsive';
import { OfertasModule } from '../ofertas/ofertas.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';

import { environment } from './../../../environments/environment.prod';

@NgModule({
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  imports: [
    SwipeModule,
    CommonModule,
    RouterModule,
    OfertasModule,
    MDBBootstrapModule,
    NgxSkeletonLoaderModule,
    ResponsiveModule.forRoot(environment.responsive)
  ]
})
export class CarouselModule { }
