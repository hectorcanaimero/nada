import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductModule } from '@sharing/product/product.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { DepartamentoComponent } from './departamento.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: ':slug', component: DepartamentoComponent },
    { path: ':slug/setor', loadChildren: () => import('../sector/sector.module').then(mod => mod.SectorModule) }
];
export class DepartamentoModule {
}
DepartamentoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DepartamentoModule });
DepartamentoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DepartamentoModule_Factory(t) { return new (t || DepartamentoModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            ProductModule,
            SemDataModule,
            SelectLojaModule,
            MDBBootstrapModule,
            NgxPaginationModule,
            RouterModule.forChild(app),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DepartamentoModule, { declarations: [DepartamentoComponent], imports: [PipesModule,
        CommonModule,
        ProductModule,
        SemDataModule,
        SelectLojaModule,
        MDBBootstrapModule,
        NgxPaginationModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DepartamentoModule, [{
        type: NgModule,
        args: [{
                declarations: [DepartamentoComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    ProductModule,
                    SemDataModule,
                    SelectLojaModule,
                    MDBBootstrapModule,
                    NgxPaginationModule,
                    RouterModule.forChild(app),
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=departamento.module.js.map