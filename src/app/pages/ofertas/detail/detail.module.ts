import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { HelperModule } from '../../../component/helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { OfertasModule } from '../../../component/ofertas/ofertas.module';
import { ResponsiveModule } from 'ngx-responsive';
import { DirectiveModule } from 'src/app/shared/directive/directive.module';

const app: Routes = [
  { path: ':departamento/:setor/:slug', component: DetailComponent },
  { path: ':departamento/:setor/:slug/init', component: DetailComponent }
];

const config = {
  breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
  },
  debounceTime: 100
};

@NgModule({
  declarations: [DetailComponent],
  imports: [
    OfertasModule,
    PipesModule,
    CommonModule,
    HelperModule,
    DirectiveModule,
    MDBBootstrapModule,
    RouterModule.forChild(app),
    ResponsiveModule.forRoot(config)
  ]
})
export class DetailModule { }
