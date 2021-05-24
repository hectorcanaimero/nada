import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SocialComponent } from './social.component';
let SocialModule = class SocialModule {
};
SocialModule = __decorate([
    NgModule({
        declarations: [SocialComponent],
        exports: [SocialComponent],
        imports: [
            CommonModule,
            MDBBootstrapModule,
        ]
    })
], SocialModule);
export { SocialModule };
//# sourceMappingURL=swipe.module.js.map