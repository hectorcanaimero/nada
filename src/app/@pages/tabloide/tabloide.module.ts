import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';

import { TabloideComponent } from './tabloide.component';
const app: Routes = [{ path: '', component: TabloideComponent }];

@NgModule({
  declarations: [TabloideComponent],
  imports: [
    PipesModule,
    CommonModule,
    SemDataModule,
    MDBBootstrapModule,
    RouterModule.forChild(app)
  ]
})
export class TabloideModule { }
