import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha.component';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { HelperModule } from 'src/app/component/helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';

const app: Routes = [
  { path: ':slug', component: CampanhaComponent },
  { path: ':slug/init', component: CampanhaComponent }
];

@NgModule({
  declarations: [CampanhaComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class CampanhaModule { }
