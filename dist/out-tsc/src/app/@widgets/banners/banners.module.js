import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { BannersComponent } from '@widgets/banners/banners.component';
import { ImageModule } from '@sharing/image/image.module';
import * as i0 from "@angular/core";
export class BannersModule {
}
BannersModule.ɵmod = i0.ɵɵdefineNgModule({ type: BannersModule });
BannersModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BannersModule_Factory(t) { return new (t || BannersModule)(); }, imports: [[
            ImageModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BannersModule, { declarations: [BannersComponent], imports: [ImageModule,
        CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [BannersComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BannersModule, [{
        type: NgModule,
        args: [{
                declarations: [BannersComponent],
                exports: [BannersComponent],
                imports: [
                    ImageModule,
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=banners.module.js.map