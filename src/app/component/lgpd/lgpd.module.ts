import { LgpdComponent } from './lgpd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';



@NgModule({
  declarations: [LgpdComponent],
  bootstrap: [LgpdComponent],
  imports: [
    HelperModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class LgpdModule { }
