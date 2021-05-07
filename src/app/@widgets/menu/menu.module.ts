import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LinkModule } from '@sharing/link/link.module';
import { HelperModule } from 'src/app/component/helper/helper.module';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    LinkModule,
    CommonModule,
    RouterModule,
    HelperModule,
    MDBBootstrapModule
  ]
})
export class MenuModule { }
