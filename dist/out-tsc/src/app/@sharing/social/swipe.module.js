import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SocialComponent } from './social.component';
import * as i0 from "@angular/core";
export class SocialModule {
}
SocialModule.ɵmod = i0.ɵɵdefineNgModule({ type: SocialModule });
SocialModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SocialModule_Factory(t) { return new (t || SocialModule)(); }, imports: [[
            CommonModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SocialModule, { declarations: [SocialComponent], imports: [CommonModule,
        MDBBootstrapModule], exports: [SocialComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SocialModule, [{
        type: NgModule,
        args: [{
                declarations: [SocialComponent],
                exports: [SocialComponent],
                imports: [
                    CommonModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=swipe.module.js.map