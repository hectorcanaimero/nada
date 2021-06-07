import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadDirective } from './lazy-load.directive';
import { ProductDirective } from './product.directive';
import * as i0 from "@angular/core";
export class DirectiveModule {
}
DirectiveModule.ɵmod = i0.ɵɵdefineNgModule({ type: DirectiveModule });
DirectiveModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DirectiveModule_Factory(t) { return new (t || DirectiveModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveModule, { declarations: [ProductDirective, LazyLoadDirective], imports: [CommonModule], exports: [ProductDirective, LazyLoadDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DirectiveModule, [{
        type: NgModule,
        args: [{
                declarations: [ProductDirective, LazyLoadDirective],
                exports: [ProductDirective, LazyLoadDirective],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=directive.module.js.map