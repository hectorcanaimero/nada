import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';

import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LinkModule } from '@sharing/link/link.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { MobileLinkModule } from '@sharing/mobile-link/mobile-link.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';

import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [MobileComponent],
  exports: [MobileComponent],
  imports: [
    LinkModule,
    FormsModule,
    PipesModule,
    CommonModule,
    RouterModule,
    OfertasModule,
    MobileLinkModule,
    SelectLojaModule,
    MDBBootstrapModule,
    ResponsiveModule.forRoot(environment.responsive)
  ]
})
export class MobileModule { }
