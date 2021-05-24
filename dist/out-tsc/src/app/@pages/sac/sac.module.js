import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacComponent } from './sac.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
const app = [{ path: '', component: SacComponent }];
let SacModule = class SacModule {
};
SacModule = __decorate([
    NgModule({
        declarations: [SacComponent],
        imports: [
            CommonModule,
            SidebarModule,
            MDBBootstrapModule,
            ReactiveFormsModule,
            RouterModule.forChild(app),
        ]
    })
], SacModule);
export { SacModule };
//# sourceMappingURL=sac.module.js.map