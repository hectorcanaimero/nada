import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogSidebarComponent } from './blog-sidebar.component';
let BlogSidebarModule = class BlogSidebarModule {
};
BlogSidebarModule = __decorate([
    NgModule({
        declarations: [BlogSidebarComponent],
        exports: [BlogSidebarComponent],
        imports: [
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]
    })
], BlogSidebarModule);
export { BlogSidebarModule };
//# sourceMappingURL=blog-sidebar.module.js.map