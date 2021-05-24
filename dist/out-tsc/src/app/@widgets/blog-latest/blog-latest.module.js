import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { BlogLatestComponent } from './blog-latest.component';
let BlogLatestModule = class BlogLatestModule {
};
BlogLatestModule = __decorate([
    NgModule({
        declarations: [BlogLatestComponent],
        exports: [BlogLatestComponent],
        imports: [
            CommonModule,
            SemDataModule,
            DirectiveModule,
            MDBBootstrapModule,
            NgxPaginationModule,
        ]
    })
], BlogLatestModule);
export { BlogLatestModule };
//# sourceMappingURL=blog-latest.module.js.map