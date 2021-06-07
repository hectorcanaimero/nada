import { environment } from './../../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ResponsiveModule } from 'ngx-responsive';
import { OfertasModule } from '../ofertas/ofertas.module';
import { SwipeModule } from '@sharing/swipe/swipe.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-responsive";
export class CarouselModule {
}
CarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[
            SwipeModule,
            CommonModule,
            RouterModule,
            OfertasModule,
            MDBBootstrapModule,
            NgxSkeletonLoaderModule,
            ResponsiveModule.forRoot(environment.responsive)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CarouselModule, { declarations: [CarouselComponent], imports: [SwipeModule,
        CommonModule,
        RouterModule,
        OfertasModule,
        MDBBootstrapModule,
        NgxSkeletonLoaderModule, i1.ResponsiveModule], exports: [CarouselComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [CarouselComponent],
                exports: [CarouselComponent],
                imports: [
                    SwipeModule,
                    CommonModule,
                    RouterModule,
                    OfertasModule,
                    MDBBootstrapModule,
                    NgxSkeletonLoaderModule,
                    ResponsiveModule.forRoot(environment.responsive)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=carousel.module.js.map