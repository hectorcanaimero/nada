import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropMenuComponent } from './drop-menu.component';
import * as i0 from "@angular/core";
export class DropMenuModule {
}
DropMenuModule.ɵmod = i0.ɵɵdefineNgModule({ type: DropMenuModule });
DropMenuModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DropMenuModule_Factory(t) { return new (t || DropMenuModule)(); }, imports: [[
            CommonModule,
            RouterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DropMenuModule, { declarations: [DropMenuComponent], imports: [CommonModule,
        RouterModule], exports: [DropMenuComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DropMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [DropMenuComponent],
                exports: [DropMenuComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=drop-menu.module.js.map