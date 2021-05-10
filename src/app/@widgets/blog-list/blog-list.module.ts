import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogListComponent } from './blog-list.component';



@NgModule({
  declarations: [BlogListComponent],
  exports: [BlogListComponent],
  imports: [
    RouterModule,
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class BlogListModule { }
