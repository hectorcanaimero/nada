import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBRootModule } from 'angular-bootstrap-md';

import { DirectiveModule } from '@core/directives/directive.module';
import { PipesModule } from '@core/pipes/pipes.module';

import { ProductComponent } from '@sharing/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    MDBRootModule,
    DirectiveModule,
  ]
})
export class ProductModule { }
