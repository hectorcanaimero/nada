import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';

import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HelperModule } from 'src/app/component/helper/helper.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

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
  declarations: [MobileComponent],
  exports: [MobileComponent],
  imports: [
    FormsModule,
    PipesModule,
    HelperModule,
    CommonModule,
    RouterModule,
    OfertasModule,
    MDBBootstrapModule,
    ResponsiveModule.forRoot(config)
  ]
})
export class MobileModule { }
