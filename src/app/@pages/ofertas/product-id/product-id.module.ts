import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { OfertasModule } from 'src/app/@widgets/ofertas/ofertas.module';

import { ProductIdComponent } from './product-id.component';
import { environment } from 'src/environments/environment.prod';

const app: Routes = [
  { path: ':departamento/:setor/:slug', component: ProductIdComponent },
  { path: ':departamento/:setor/:slug/init', component: ProductIdComponent }
];

@NgModule({
  declarations: [ProductIdComponent],
  imports: [
    PipesModule,
    CommonModule,
    SemDataModule,
    OfertasModule,
    DirectiveModule,
    SelectLojaModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
    ResponsiveModule.forRoot(environment.responsive)
  ]
})
export class ProductIdModule { }
