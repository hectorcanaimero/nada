import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoComponent } from './departamento.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HelperModule } from 'src/app/component/helper/helper.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { PipesModule } from '../../../shared/pipes/pipes.module';

const app: Routes = [
  { path: ':slug', component: DepartamentoComponent },
  { path: ':slug/init', component: DepartamentoComponent },
  { path: ':slug/setor', loadChildren: () => import('../sector/sector.module').then( mod => mod.SectorModule )}
];

@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    NgxPaginationModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
  ]
})
export class DepartamentoModule { }
