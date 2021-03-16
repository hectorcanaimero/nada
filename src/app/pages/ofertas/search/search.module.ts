import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OfertasModule } from '../../../component/ofertas/ofertas.module';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { HelperModule } from '../../../component/helper/helper.module';


const app: Routes = [
  { path: ':slug', component: SearchComponent }
];


@NgModule({
  declarations: [SearchComponent],
  imports: [
    PipesModule,
    HelperModule,
    CommonModule,
    MDBBootstrapModule,
    OfertasModule,
    RouterModule.forChild(app)
  ]
})
export class SearchModule { }
