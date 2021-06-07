import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { BlogListModule } from '@widgets/blog-list/blog-list.module';
import { BlogLatestModule } from '@widgets/blog-latest/blog-latest.module';
import { BlogSliderModule } from '@widgets/blog-slider/blog-slider.module';
import { BlogSidebarModule } from '@widgets/blog-sidebar/blog-sidebar.module';
import { BlogComponent } from './blog.component';
import { AllInComponent } from './all-in/all-in.component';
import { DetailComponent } from './detail/detail.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [
    { path: '', component: BlogComponent },
    { path: ':slug', component: DetailComponent },
    { path: ':first/:slug', component: AllInComponent }
];
export class BlogModule {
}
BlogModule.ɵmod = i0.ɵɵdefineNgModule({ type: BlogModule });
BlogModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            BlogListModule,
            BlogLatestModule,
            BlogSliderModule,
            BlogSidebarModule,
            NgxPaginationModule,
            MDBBootstrapModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BlogModule, { declarations: [BlogComponent, DetailComponent, AllInComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        BlogListModule,
        BlogLatestModule,
        BlogSliderModule,
        BlogSidebarModule,
        NgxPaginationModule,
        MDBBootstrapModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BlogModule, [{
        type: NgModule,
        args: [{
                declarations: [BlogComponent, DetailComponent, AllInComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    SemDataModule,
                    BlogListModule,
                    BlogLatestModule,
                    BlogSliderModule,
                    BlogSidebarModule,
                    NgxPaginationModule,
                    MDBBootstrapModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=blog.module.js.map