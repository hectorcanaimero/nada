import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MobileLinkComponent } from './mobile-link.component';
import * as i0 from "@angular/core";
export class MobileLinkModule {
}
MobileLinkModule.ɵmod = i0.ɵɵdefineNgModule({ type: MobileLinkModule });
MobileLinkModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MobileLinkModule_Factory(t) { return new (t || MobileLinkModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MobileLinkModule, { declarations: [MobileLinkComponent], imports: [CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [MobileLinkComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MobileLinkModule, [{
        type: NgModule,
        args: [{
                declarations: [MobileLinkComponent],
                exports: [MobileLinkComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=mobile-link.module.js.map