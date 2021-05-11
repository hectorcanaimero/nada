import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacComponent } from './sac.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from '@sharing/menu-sidebar/sidebar.module';

const app: Routes = [{ path: '', component: SacComponent }];

@NgModule({
  declarations: [SacComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    RouterModule.forChild(app),

  ]
})
export class SacModule { }
