import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacComponent } from './sac.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [{ path: '', component: SacComponent }];
export class SacModule {
}
SacModule.ɵmod = i0.ɵɵdefineNgModule({ type: SacModule });
SacModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SacModule_Factory(t) { return new (t || SacModule)(); }, imports: [[
            CommonModule,
            SidebarModule,
            MDBBootstrapModule,
            ReactiveFormsModule,
            RouterModule.forChild(app),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SacModule, { declarations: [SacComponent], imports: [CommonModule,
        SidebarModule,
        MDBBootstrapModule,
        ReactiveFormsModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SacModule, [{
        type: NgModule,
        args: [{
                declarations: [SacComponent],
                imports: [
                    CommonModule,
                    SidebarModule,
                    MDBBootstrapModule,
                    ReactiveFormsModule,
                    RouterModule.forChild(app),
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=sac.module.js.map