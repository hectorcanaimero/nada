import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { ProductIdComponent } from './product-id.component';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ngx-responsive";
const app = [
    { path: ':departamento/:setor/:slug', component: ProductIdComponent },
    { path: ':departamento/:setor/:slug/init', component: ProductIdComponent }
];
export class ProductIdModule {
}
ProductIdModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProductIdModule });
ProductIdModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProductIdModule_Factory(t) { return new (t || ProductIdModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            OfertasModule,
            DirectiveModule,
            SelectLojaModule,
            MDBBootstrapModule,
            RouterModule.forChild(app),
            ResponsiveModule.forRoot(environment.responsive)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProductIdModule, { declarations: [ProductIdComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        OfertasModule,
        DirectiveModule,
        SelectLojaModule,
        MDBBootstrapModule, i1.RouterModule, i2.ResponsiveModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProductIdModule, [{
        type: NgModule,
        args: [{
                declarations: [ProductIdComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    SemDataModule,
                    OfertasModule,
                    DirectiveModule,
                    SelectLojaModule,
                    MDBBootstrapModule,
                    RouterModule.forChild(app),
                    ResponsiveModule.forRoot(environment.responsive)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=product-id.module.js.map