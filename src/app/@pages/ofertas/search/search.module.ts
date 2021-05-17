import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { ProductModule } from '@sharing/product/product.module';

import { SearchComponent } from './search.component';

const app: Routes = [ { path: ':slug', component: SearchComponent } ];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    PipesModule,
    CommonModule,
    ProductModule,
    MDBBootstrapModule,
    OfertasModule,
    RouterModule.forChild(app)
  ]
})
export class SearchModule { }
