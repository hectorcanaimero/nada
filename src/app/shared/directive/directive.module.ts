import { ProductDirective } from './product.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductDirective],
  exports: [ProductDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
