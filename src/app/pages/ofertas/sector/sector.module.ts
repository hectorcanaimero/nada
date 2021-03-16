import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorComponent } from './sector.component';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { HelperModule } from '../../../component/helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';

const app: Routes = [
  { path: ':slug', component: SectorComponent },
  { path: ':slug/init', component: SectorComponent }
];

@NgModule({
  declarations: [SectorComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class SectorModule { }
