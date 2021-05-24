import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogListComponent } from './blog-list.component';
let BlogListModule = class BlogListModule {
};
BlogListModule = __decorate([
    NgModule({
        declarations: [BlogListComponent],
        exports: [BlogListComponent],
        imports: [
            RouterModule,
            CommonModule,
            MDBBootstrapModule,
        ]
    })
], BlogListModule);
export { BlogListModule };
//# sourceMappingURL=blog-list.module.js.map