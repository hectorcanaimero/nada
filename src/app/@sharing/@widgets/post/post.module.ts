import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PipesModule } from '@core/pipes/pipes.module';
import { TituloModule } from '@sharing/titulo/titulo.module';

import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    TituloModule,
    MDBBootstrapModule
  ]
})
export class PostModule { }
