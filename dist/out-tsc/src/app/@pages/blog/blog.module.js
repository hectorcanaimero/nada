import { __decorate } from "tslib";
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
const app = [
    { path: '', component: BlogComponent },
    { path: ':slug', component: DetailComponent },
    { path: ':first/:slug', component: AllInComponent }
];
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    NgModule({
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
    })
], BlogModule);
export { BlogModule };
//# sourceMappingURL=blog.module.js.map