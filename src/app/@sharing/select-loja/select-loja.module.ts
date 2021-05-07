import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SelectLojaComponent } from './select-loja.component';

@NgModule({
  declarations: [SelectLojaComponent],
  exports: [SelectLojaComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class SelectLojaModule { }
