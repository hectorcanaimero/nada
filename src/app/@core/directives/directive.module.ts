import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDirective } from './product.directive';
import { WebLazyDirective } from './web-lazy.directive';
import { LazyLoadDirective } from './lazy-load.directive';
import { WebpProductDirective } from './webp-product.directive';

@NgModule({
  declarations: [ProductDirective, LazyLoadDirective, WebpProductDirective, WebLazyDirective],
  exports: [ProductDirective, LazyLoadDirective, WebpProductDirective, WebLazyDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
