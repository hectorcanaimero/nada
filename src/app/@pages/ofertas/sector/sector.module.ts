import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { ProductModule } from '@sharing/product/product.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';

import { SectorComponent } from './sector.component';

const app: Routes = [
  { path: ':slug', component: SectorComponent },
];

@NgModule({
  declarations: [SectorComponent],
  imports: [
    PipesModule,
    CommonModule,
    SemDataModule,
    ProductModule,
    SelectLojaModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class SectorModule { }
