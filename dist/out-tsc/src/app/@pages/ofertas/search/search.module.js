import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { ProductModule } from '@sharing/product/product.module';
import { SearchComponent } from './search.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [{ path: ':slug', component: SearchComponent }];
export class SearchModule {
}
SearchModule.ɵmod = i0.ɵɵdefineNgModule({ type: SearchModule });
SearchModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            ProductModule,
            MDBBootstrapModule,
            OfertasModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SearchModule, { declarations: [SearchComponent], imports: [PipesModule,
        CommonModule,
        ProductModule,
        MDBBootstrapModule,
        OfertasModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchModule, [{
        type: NgModule,
        args: [{
                declarations: [SearchComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    ProductModule,
                    MDBBootstrapModule,
                    OfertasModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=search.module.js.map