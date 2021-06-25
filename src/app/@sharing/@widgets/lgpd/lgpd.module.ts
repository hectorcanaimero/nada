import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LgpdComponent } from './lgpd.component';



@NgModule({
  declarations: [LgpdComponent],
  exports: [LgpdComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class LgpdModule { }
