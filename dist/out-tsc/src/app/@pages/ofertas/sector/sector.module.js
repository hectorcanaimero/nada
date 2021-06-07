import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { ProductModule } from '@sharing/product/product.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { SectorComponent } from './sector.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: ':slug', component: SectorComponent },
];
export class SectorModule {
}
SectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: SectorModule });
SectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SectorModule_Factory(t) { return new (t || SectorModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            ProductModule,
            SelectLojaModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SectorModule, { declarations: [SectorComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        ProductModule,
        SelectLojaModule,
        MDBBootstrapModule,
        NgxPaginationModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectorModule, [{
        type: NgModule,
        args: [{
                declarations: [SectorComponent],
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
//# sourceMappingURL=sector.module.js.map