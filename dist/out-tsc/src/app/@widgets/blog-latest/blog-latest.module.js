import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { BlogLatestComponent } from './blog-latest.component';
import * as i0 from "@angular/core";
export class BlogLatestModule {
}
BlogLatestModule.ɵmod = i0.ɵɵdefineNgModule({ type: BlogLatestModule });
BlogLatestModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BlogLatestModule_Factory(t) { return new (t || BlogLatestModule)(); }, imports: [[
            CommonModule,
            SemDataModule,
            DirectiveModule,
            MDBBootstrapModule,
            NgxPaginationModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BlogLatestModule, { declarations: [BlogLatestComponent], imports: [CommonModule,
        SemDataModule,
        DirectiveModule,
        MDBBootstrapModule,
        NgxPaginationModule], exports: [BlogLatestComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogLatestModule, [{
        type: NgModule,
        args: [{
                declarations: [BlogLatestComponent],
                exports: [BlogLatestComponent],
                imports: [
                    CommonModule,
                    SemDataModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                    NgxPaginationModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=blog-latest.module.js.map