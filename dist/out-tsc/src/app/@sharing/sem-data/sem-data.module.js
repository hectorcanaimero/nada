import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SemDataComponent } from './sem-data.component';
import * as i0 from "@angular/core";
export class SemDataModule {
}
SemDataModule.ɵmod = i0.ɵɵdefineNgModule({ type: SemDataModule });
SemDataModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SemDataModule_Factory(t) { return new (t || SemDataModule)(); }, imports: [[
            CommonModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SemDataModule, { declarations: [SemDataComponent], imports: [CommonModule,
        MDBBootstrapModule], exports: [SemDataComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SemDataModule, [{
        type: NgModule,
        args: [{
                declarations: [SemDataComponent],
                exports: [SemDataComponent],
                imports: [
                    CommonModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=sem-data.module.js.map