import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';

@NgModule({
  declarations: [BannersComponent],
  bootstrap: [BannersComponent],
  imports: [
    HelperModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class BannersModule { }
