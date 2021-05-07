import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SidebarComponent } from './sidebar.component';


@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
  ]
})
export class SidebarModule { }