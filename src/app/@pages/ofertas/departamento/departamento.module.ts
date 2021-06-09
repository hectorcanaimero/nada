import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { ProductModule } from '@sharing/product/product.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { DepartamentoComponent } from './departamento.component';

const app: Routes = [
  { path: ':slug', component: DepartamentoComponent },
  { path: ':slug/setor', loadChildren: () => import('../sector/sector.module').then( mod => mod.SectorModule )}
];

@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    PipesModule,
    CommonModule,
    ProductModule,
    SemDataModule,
    SelectLojaModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app),
  ]
})
export class DepartamentoModule { }
