import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LinkModule } from '@sharing/link/link.module';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    LinkModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ]
})
export class MenuModule { }
