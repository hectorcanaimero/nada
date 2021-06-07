import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuComponent } from './menu.component';
import * as i0 from "@angular/core";
export class MenuSharingModule {
}
MenuSharingModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuSharingModule });
MenuSharingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuSharingModule_Factory(t) { return new (t || MenuSharingModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuSharingModule, { declarations: [MenuComponent], imports: [CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [MenuComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuSharingModule, [{
        type: NgModule,
        args: [{
                declarations: [MenuComponent],
                exports: [MenuComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=mobile-link.module.js.map