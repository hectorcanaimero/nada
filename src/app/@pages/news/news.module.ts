import { SemDataModule } from './../../@sharing/sem-data/sem-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HelperModule } from '../../component/helper/helper.module';
import { PipesModule } from '@core/pipes/pipes.module';

import { NewsComponent } from './news.component';

const app: Routes = [ { path: ':id', component: NewsComponent } ]

@NgModule({
  declarations: [NewsComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    SemDataModule,
    MDBBootstrapModule,
    RouterModule.forChild(app)
  ]
})
export class NewsModule { }
