import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojasComponent } from './lojas.component';
import { DetailComponent } from './detail/detail.component';
import { HelperModule } from '../../component/helper/helper.module';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  { path: '', component: LojasComponent },
  { path: ':slug', component: DetailComponent }
];


@NgModule({
  declarations: [LojasComponent, DetailComponent],
  imports: [
    FormsModule,
    CommonModule,
    HelperModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class LojasModule { }
