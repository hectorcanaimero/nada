import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { HelperModule } from '../../component/helper/helper.module';

const app: Routes = [ { path: ':id', component: NewsComponent } ]

@NgModule({
  declarations: [NewsComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    MDBBootstrapModule,
    RouterModule.forChild(app)
  ]
})
export class NewsModule { }
