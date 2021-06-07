import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SocialComponent } from './social.component';

@NgModule({
  declarations: [SocialComponent],
  exports: [SocialComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class SocialModule { }
