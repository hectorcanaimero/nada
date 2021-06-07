import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { SocialModule } from '@sharing/social/swipe.module';
import { MenuSharingModule } from '@sharing/menu/mobile-link.module';
import * as i0 from "@angular/core";
export class FooterModule {
}
FooterModule.ɵmod = i0.ɵɵdefineNgModule({ type: FooterModule });
FooterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            MenuSharingModule,
            PipesModule,
            CommonModule,
            RouterModule,
            SocialModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FooterModule, { declarations: [FooterComponent], imports: [MenuSharingModule,
        PipesModule,
        CommonModule,
        RouterModule,
        SocialModule,
        MDBBootstrapModule], exports: [FooterComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterModule, [{
        type: NgModule,
        args: [{
                declarations: [FooterComponent],
                exports: [FooterComponent],
                imports: [
                    MenuSharingModule,
                    PipesModule,
                    CommonModule,
                    RouterModule,
                    SocialModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=footer.module.js.map