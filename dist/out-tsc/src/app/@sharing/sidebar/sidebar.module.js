import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarComponent } from './sidebar.component';
import * as i0 from "@angular/core";
export class SidebarModule {
}
SidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: SidebarModule });
SidebarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SidebarModule, { declarations: [SidebarComponent], imports: [CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [SidebarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [SidebarComponent],
                exports: [SidebarComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=sidebar.module.js.map