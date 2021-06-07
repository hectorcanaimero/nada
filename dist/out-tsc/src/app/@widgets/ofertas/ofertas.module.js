import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas.component';
import { TituloModule } from '@sharing/titulo/titulo.module';
import { ProductModule } from '@sharing/product/product.module';
import * as i0 from "@angular/core";
export class OfertasModule {
}
OfertasModule.ɵmod = i0.ɵɵdefineNgModule({ type: OfertasModule });
OfertasModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OfertasModule_Factory(t) { return new (t || OfertasModule)(); }, imports: [[
            SwiperModule,
            TituloModule,
            RouterModule,
            CommonModule,
            ProductModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OfertasModule, { declarations: [OfertasComponent], imports: [SwiperModule,
        TituloModule,
        RouterModule,
        CommonModule,
        ProductModule,
        MDBBootstrapModule], exports: [OfertasComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OfertasModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=ofertas.module.js.map