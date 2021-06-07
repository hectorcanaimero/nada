import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { FaixaComponent } from './faixa.component';
import * as i0 from "@angular/core";
export class FaixaModule {
}
FaixaModule.ɵmod = i0.ɵɵdefineNgModule({ type: FaixaModule });
FaixaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FaixaModule_Factory(t) { return new (t || FaixaModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FaixaModule, { declarations: [FaixaComponent], imports: [CommonModule,
        RouterModule,
        DirectiveModule,
        MDBBootstrapModule], exports: [FaixaComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FaixaModule, [{
        type: NgModule,
        args: [{
                declarations: [FaixaComponent],
                exports: [FaixaComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=faixa.module.js.map