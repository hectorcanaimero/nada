import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DirectiveModule } from '@core/directives/directive.module';

import { FaixaComponent } from './faixa.component';

@NgModule({
  declarations: [FaixaComponent],
  exports: [FaixaComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveModule,
    MDBBootstrapModule,
  ]
})
export class FaixaModule { }
