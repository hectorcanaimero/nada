import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { BannersComponent } from '@widgets/banners/banners.component';
import { ImageModule } from '@sharing/image/image.module';
let BannersModule = class BannersModule {
};
BannersModule = __decorate([
    NgModule({
        declarations: [BannersComponent],
        exports: [BannersComponent],
        imports: [
            ImageModule,
            CommonModule,
            RouterModule,
            MDBBootstrapModule
        ]
    })
], BannersModule);
export { BannersModule };
//# sourceMappingURL=banners.module.js.map