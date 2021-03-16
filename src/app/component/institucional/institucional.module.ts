import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionalComponent } from './institucional.component';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../helper/helper.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
  declarations: [InstitucionalComponent],
  bootstrap: [InstitucionalComponent],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    HelperModule,
    MDBBootstrapModule
  ]
})
export class InstitucionalModule { }
