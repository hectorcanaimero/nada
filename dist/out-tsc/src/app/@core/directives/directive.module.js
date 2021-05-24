import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadDirective } from './lazy-load.directive';
import { ProductDirective } from './product.directive';
let DirectiveModule = class DirectiveModule {
};
DirectiveModule = __decorate([
    NgModule({
        declarations: [ProductDirective, LazyLoadDirective],
        exports: [ProductDirective, LazyLoadDirective],
        imports: [
            CommonModule
        ]
    })
], DirectiveModule);
export { DirectiveModule };
//# sourceMappingURL=directive.module.js.map