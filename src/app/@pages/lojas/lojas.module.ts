import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';

import { LojasComponent } from './lojas.component';
import { LojaIdComponent } from './detail/loja-id.component';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';

const app: Routes = [
  { path: '', component: LojasComponent },
  { path: ':slug', component: LojaIdComponent }
];


@NgModule({
  declarations: [LojasComponent, LojaIdComponent],
  imports: [
    FormsModule,
    CommonModule,
    SemDataModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class LojasModule { }
