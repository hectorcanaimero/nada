import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { DirectiveModule } from '@core/directives/directive.module';

import { NewsComponent } from './news.component';

const app: Routes = [ { path: ':id', component: NewsComponent } ]

@NgModule({
  declarations: [NewsComponent],
  imports: [
    PipesModule,
    CommonModule,
    SemDataModule,
    SidebarModule,
    DirectiveModule,
    MDBBootstrapModule,
    RouterModule.forChild(app)
  ]
})
export class NewsModule { }
