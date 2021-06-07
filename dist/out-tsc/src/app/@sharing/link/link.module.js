import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DirectiveModule } from '@core/directives/directive.module';
import { LinkComponent } from './link.component';
import * as i0 from "@angular/core";
export class LinkModule {
}
LinkModule.ɵmod = i0.ɵɵdefineNgModule({ type: LinkModule });
LinkModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LinkModule_Factory(t) { return new (t || LinkModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            DirectiveModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LinkModule, { declarations: [LinkComponent], imports: [CommonModule,
        RouterModule,
        DirectiveModule,
        MDBBootstrapModule], exports: [LinkComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LinkModule, [{
        type: NgModule,
        args: [{
                declarations: [LinkComponent],
                exports: [LinkComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=link.module.js.map