import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBRootModule } from 'angular-bootstrap-md';

import { SidebarComponent } from './sidebar.component';
import { HelperModule } from 'src/app/component/helper/helper.module';


@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    MDBRootModule,
  ]
})
export class SidebarModule { }
