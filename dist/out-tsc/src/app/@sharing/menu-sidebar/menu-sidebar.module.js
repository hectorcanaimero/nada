import { MobileLinkModule } from '@sharing/mobile-link/mobile-link.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBRootModule } from 'angular-bootstrap-md';
import { MenuSidebarComponent } from './menu-sidebar.component';
import * as i0 from "@angular/core";
export class MenuSidebarModule {
}
MenuSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuSidebarModule });
MenuSidebarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuSidebarModule_Factory(t) { return new (t || MenuSidebarModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MDBRootModule,
            MobileLinkModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuSidebarModule, { declarations: [MenuSidebarComponent], imports: [CommonModule,
        RouterModule,
        MDBRootModule,
        MobileLinkModule], exports: [MenuSidebarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuSidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [MenuSidebarComponent],
                exports: [MenuSidebarComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MDBRootModule,
                    MobileLinkModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=menu-sidebar.module.js.map