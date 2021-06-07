import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { MobileModule } from '@widgets/mobile/mobile.module';
import { DropMenuModule } from '@sharing/drop-menu/drop-menu.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { MenuSidebarModule } from '@sharing/menu-sidebar/menu-sidebar.module';
import * as i0 from "@angular/core";
export class TopModule {
}
TopModule.ɵmod = i0.ɵɵdefineNgModule({ type: TopModule });
TopModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TopModule_Factory(t) { return new (t || TopModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MobileModule,
            DropMenuModule,
            SelectLojaModule,
            MenuSidebarModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TopModule, { declarations: [TopComponent], imports: [CommonModule,
        RouterModule,
        MobileModule,
        DropMenuModule,
        SelectLojaModule,
        MenuSidebarModule,
        MDBBootstrapModule], exports: [TopComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TopModule, [{
        type: NgModule,
        args: [{
                declarations: [TopComponent],
                exports: [TopComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MobileModule,
                    DropMenuModule,
                    SelectLojaModule,
                    MenuSidebarModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=top.module.js.map