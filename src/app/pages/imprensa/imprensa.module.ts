import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprensaComponent } from './imprensa.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { HelperModule } from '../../component/helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  { path: '', component: ImprensaComponent },
  { path: ':slug', component: DetailComponent }
];

@NgModule({
  declarations: [ImprensaComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelperModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class ImprensaModule { }
