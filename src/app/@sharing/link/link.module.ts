import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DirectiveModule } from '@core/directives/directive.module';

import { LinkComponent } from './link.component';

@NgModule({
  declarations: [LinkComponent],
  exports: [LinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectiveModule,
    MDBBootstrapModule,
  ]
})
export class LinkModule { }
