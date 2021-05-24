import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBRootModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductComponent } from '@sharing/product/product.component';
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    NgModule({
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
], ProductModule);
export { ProductModule };
//# sourceMappingURL=product.module.js.map