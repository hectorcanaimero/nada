import { MobileLinkModule } from '@sharing/mobile-link/mobile-link.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBRootModule } from 'angular-bootstrap-md';

import { MenuSidebarComponent } from './menu-sidebar.component';

@NgModule({
  declarations: [MenuSidebarComponent],
  exports: [MenuSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBRootModule,
    MobileLinkModule,
  ]
})
export class MenuSidebarModule { }
