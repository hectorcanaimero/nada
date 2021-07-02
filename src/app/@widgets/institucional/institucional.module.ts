import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { TituloModule } from '@sharing/titulo/titulo.module';

import { InstitucionalComponent } from './institucional.component';

@NgModule({
  declarations: [InstitucionalComponent],
  exports: [InstitucionalComponent],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    TituloModule,
    MDBBootstrapModule
  ]
})
export class InstitucionalModule { }
