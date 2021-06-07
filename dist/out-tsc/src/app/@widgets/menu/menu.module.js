import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LinkModule } from '@sharing/link/link.module';
import { MenuComponent } from './menu.component';
import * as i0 from "@angular/core";
export class MenuModule {
}
MenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: MenuModule });
MenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            LinkModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuModule, { declarations: [MenuComponent], imports: [LinkModule,
        CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [MenuComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuModule, [{
        type: NgModule,
        args: [{
                declarations: [MenuComponent],
                exports: [MenuComponent],
                imports: [
                    LinkModule,
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=menu.module.js.map