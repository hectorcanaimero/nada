import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogListComponent } from './blog-list.component';
import * as i0 from "@angular/core";
export class BlogListModule {
}
BlogListModule.ɵmod = i0.ɵɵdefineNgModule({ type: BlogListModule });
BlogListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BlogListModule_Factory(t) { return new (t || BlogListModule)(); }, imports: [[
            RouterModule,
            CommonModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BlogListModule, { declarations: [BlogListComponent], imports: [RouterModule,
        CommonModule,
        MDBBootstrapModule], exports: [BlogListComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogListModule, [{
        type: NgModule,
        args: [{
                declarations: [BlogListComponent],
                exports: [BlogListComponent],
                imports: [
                    RouterModule,
                    CommonModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=blog-list.module.js.map