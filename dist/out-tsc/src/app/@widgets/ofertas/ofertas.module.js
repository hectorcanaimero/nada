import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas.component';
import { TituloModule } from '@sharing/titulo/titulo.module';
import { ProductModule } from '@sharing/product/product.module';
let OfertasModule = class OfertasModule {
};
OfertasModule = __decorate([
    NgModule({
        declarations: [OfertasComponent],
        exports: [OfertasComponent],
        imports: [
            SwiperModule,
            TituloModule,
            RouterModule,
            CommonModule,
            ProductModule,
            MDBBootstrapModule
        ]
    })
], OfertasModule);
export { OfertasModule };
//# sourceMappingURL=ofertas.module.js.map