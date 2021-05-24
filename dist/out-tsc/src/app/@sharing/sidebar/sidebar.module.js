import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarComponent } from './sidebar.component';
let SidebarModule = class SidebarModule {
};
SidebarModule = __decorate([
    NgModule({
        declarations: [SidebarComponent],
        exports: [SidebarComponent],
        imports: [
            CommonModule,
            RouterModule,
            MDBBootstrapModule,
        ]
    })
], SidebarModule);
export { SidebarModule };
//# sourceMappingURL=sidebar.module.js.map