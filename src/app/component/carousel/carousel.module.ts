import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ResponsiveModule } from 'ngx-responsive';
import { OfertasModule } from '../ofertas/ofertas.module';


const config = {
  breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
  },
  debounceTime: 100
};

@NgModule({
  declarations: [CarouselComponent],
  bootstrap: [CarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    OfertasModule,
    MDBBootstrapModule,
    NgxSkeletonLoaderModule,
    ResponsiveModule.forRoot(config)
  ]
})
export class CarouselModule { }
