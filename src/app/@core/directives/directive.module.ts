import { LazyLoadDirective } from './lazy-load.directive';
import { ProductDirective } from './product.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductDirective, LazyLoadDirective],
  exports: [ProductDirective, LazyLoadDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
