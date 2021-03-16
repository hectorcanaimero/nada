import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../../../component/helper/helper.module';

@NgModule({
  declarations: [TopComponent],
  exports: [TopComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    MDBBootstrapModule
  ]
})
export class TopModule { }
