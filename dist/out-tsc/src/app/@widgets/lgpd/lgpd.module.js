import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LgpdComponent } from './lgpd.component';
import * as i0 from "@angular/core";
export class LgpdModule {
}
LgpdModule.ɵmod = i0.ɵɵdefineNgModule({ type: LgpdModule });
LgpdModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LgpdModule_Factory(t) { return new (t || LgpdModule)(); }, imports: [[
            CommonModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LgpdModule, { declarations: [LgpdComponent], imports: [CommonModule,
        MDBBootstrapModule], exports: [LgpdComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LgpdModule, [{
        type: NgModule,
        args: [{
                declarations: [LgpdComponent],
                exports: [LgpdComponent],
                imports: [
                    CommonModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=lgpd.module.js.map