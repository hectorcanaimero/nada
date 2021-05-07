import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DirectiveModule } from '@core/directives/directive.module';

import { TituloComponent } from './titulo.component';

@NgModule({
  declarations: [TituloComponent],
  exports: [TituloComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveModule,
    MDBBootstrapModule,
  ]
})
export class TituloModule { }
