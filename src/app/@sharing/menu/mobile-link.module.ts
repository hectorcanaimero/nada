import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
  ]
})
export class MenuSharingModule { }
