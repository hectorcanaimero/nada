import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MobileLinkComponent } from './mobile-link.component';



@NgModule({
  declarations: [MobileLinkComponent],
  exports: [MobileLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
  ]
})
export class MobileLinkModule { }
