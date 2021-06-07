import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { TituloComponent } from './titulo.component';
import * as i0 from "@angular/core";
export class TituloModule {
}
TituloModule.ɵmod = i0.ɵɵdefineNgModule({ type: TituloModule });
TituloModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TituloModule_Factory(t) { return new (t || TituloModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TituloModule, { declarations: [TituloComponent], imports: [CommonModule,
        RouterModule,
        DirectiveModule,
        MDBBootstrapModule], exports: [TituloComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TituloModule, [{
        type: NgModule,
        args: [{
                declarations: [TituloComponent],
                exports: [TituloComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=titulo.module.js.map