import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { TituloModule } from '@sharing/titulo/titulo.module';
import { InstitucionalComponent } from './institucional.component';
let InstitucionalModule = class InstitucionalModule {
};
InstitucionalModule = __decorate([
    NgModule({
        declarations: [InstitucionalComponent],
        exports: [InstitucionalComponent],
        imports: [
            PipesModule,
            CommonModule,
            RouterModule,
            TituloModule,
            MDBBootstrapModule
        ]
    })
], InstitucionalModule);
export { InstitucionalModule };
//# sourceMappingURL=institucional.module.js.map