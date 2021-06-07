import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogSidebarComponent } from './blog-sidebar.component';
import * as i0 from "@angular/core";
export class BlogSidebarModule {
}
BlogSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: BlogSidebarModule });
BlogSidebarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BlogSidebarModule_Factory(t) { return new (t || BlogSidebarModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BlogSidebarModule, { declarations: [BlogSidebarComponent], imports: [CommonModule,
        RouterModule,
        MDBBootstrapModule], exports: [BlogSidebarComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogSidebarModule, [{
        type: NgModule,
        args: [{
                declarations: [BlogSidebarComponent],
                exports: [BlogSidebarComponent],
                imports: [
                    CommonModule,
                    RouterModule,
                    MDBBootstrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=blog-sidebar.module.js.map