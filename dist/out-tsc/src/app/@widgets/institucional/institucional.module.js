import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { TituloModule } from '@sharing/titulo/titulo.module';
import { InstitucionalComponent } from './institucional.component';
import * as i0 from "@angular/core";
export class InstitucionalModule {
}
InstitucionalModule.ɵmod = i0.ɵɵdefineNgModule({ type: InstitucionalModule });
InstitucionalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InstitucionalModule_Factory(t) { return new (t || InstitucionalModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            RouterModule,
            TituloModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InstitucionalModule, { declarations: [InstitucionalComponent], imports: [PipesModule,
        CommonModule,
        RouterModule,
        TituloModule,
        MDBBootstrapModule], exports: [InstitucionalComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InstitucionalModule, [{
        type: NgModule,
        args: [{
                declarations: [InstitucionalComponent],
                exports: [InstitucionalComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    RouterModule,
                    TituloModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=institucional.module.js.map