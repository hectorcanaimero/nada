import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { TabloideComponent } from './tabloide.component';
const app = [{ path: '', component: TabloideComponent }];
let TabloideModule = class TabloideModule {
};
TabloideModule = __decorate([
    NgModule({
        declarations: [TabloideComponent],
        imports: [
            PipesModule,
            CommonModule,
            SemDataModule,
            MDBBootstrapModule,
            RouterModule.forChild(app)
        ]
    })
], TabloideModule);
export { TabloideModule };
//# sourceMappingURL=tabloide.module.js.map