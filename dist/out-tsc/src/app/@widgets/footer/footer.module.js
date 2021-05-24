import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { SocialModule } from '@sharing/social/swipe.module';
import { MenuSharingModule } from '@sharing/menu/mobile-link.module';
let FooterModule = class FooterModule {
};
FooterModule = __decorate([
    NgModule({
        declarations: [FooterComponent],
        exports: [FooterComponent],
        imports: [
            MenuSharingModule,
            PipesModule,
            CommonModule,
            RouterModule,
            SocialModule,
            MDBBootstrapModule
        ]
    })
], FooterModule);
export { FooterModule };
//# sourceMappingURL=footer.module.js.map