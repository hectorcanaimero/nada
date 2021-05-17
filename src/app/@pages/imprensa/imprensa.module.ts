import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';

import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';

import { ImprensaComponent } from './imprensa.component';
import { DetailComponent } from './detail/detail.component';

const app: Routes = [
  { path: '', component: ImprensaComponent },
  { path: ':slug', component: DetailComponent }
];

@NgModule({
  declarations: [ImprensaComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SemDataModule,
    SidebarModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class ImprensaModule { }
