import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { ProductModule } from '@sharing/product/product.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';

import { CampanhaComponent } from './campanha.component';

const app: Routes = [
  { path: ':slug', component: CampanhaComponent },
];

@NgModule({
  declarations: [CampanhaComponent],
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
export class CampanhaModule { }
