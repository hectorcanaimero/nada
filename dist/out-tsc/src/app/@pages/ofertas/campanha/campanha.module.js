import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductModule } from '@sharing/product/product.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { CampanhaComponent } from './campanha.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: ':slug', component: CampanhaComponent },
];
export class CampanhaModule {
}
CampanhaModule.ɵmod = i0.ɵɵdefineNgModule({ type: CampanhaModule });
CampanhaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CampanhaModule_Factory(t) { return new (t || CampanhaModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            ProductModule,
            SelectLojaModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CampanhaModule, { declarations: [CampanhaComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        ProductModule,
        SelectLojaModule,
        MDBBootstrapModule,
        NgxPaginationModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CampanhaModule, [{
        type: NgModule,
        args: [{
                declarations: [CampanhaComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    SemDataModule,
                    ProductModule,
                    SelectLojaModule,
                    MDBBootstrapModule,
                    NgxPaginationModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=campanha.module.js.map