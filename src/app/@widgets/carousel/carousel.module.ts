import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ResponsiveModule } from 'ngx-responsive';

import { CarouselComponent } from './carousel.component';
import { OfertasModule } from '../ofertas/ofertas.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';
import { environment } from '../../../environments/environment.prod';

@NgModule({
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  imports: [
    SwipeModule,
    CommonModule,
    RouterModule,
    OfertasModule,
    MDBBootstrapModule,
    ResponsiveModule.forRoot(environment.responsive)
  ]
})
export class CarouselModule { }
