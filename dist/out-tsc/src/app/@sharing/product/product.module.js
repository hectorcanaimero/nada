import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBRootModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductComponent } from '@sharing/product/product.component';
import * as i0 from "@angular/core";
export class ProductModule {
}
ProductModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProductModule });
ProductModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            RouterModule,
            MDBRootModule,
            DirectiveModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductModule, { declarations: [ProductComponent], imports: [PipesModule,
        CommonModule,
        RouterModule,
        MDBRootModule,
        DirectiveModule], exports: [ProductComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductModule, [{
        type: NgModule,
        args: [{
                declarations: [ProductComponent],
                exports: [ProductComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    RouterModule,
                    MDBRootModule,
                    DirectiveModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=product.module.js.map