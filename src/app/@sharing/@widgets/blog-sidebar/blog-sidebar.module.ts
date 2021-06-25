import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BlogSidebarComponent } from './blog-sidebar.component';

@NgModule({
  declarations: [BlogSidebarComponent],
  exports: [BlogSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
  ]
})
export class BlogSidebarModule { }
