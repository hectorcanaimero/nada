import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DirectiveModule } from '@core/directives/directive.module';

import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent],
  exports: [ImageComponent],
  imports: [
    RouterModule,
    CommonModule,
    DirectiveModule,
    MDBBootstrapModule,
    LazyLoadImageModule,
  ]
})
export class ImageModule { }
