import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DirectiveModule } from '@core/directives/directive.module';
import { ImageComponent } from './image.component';
import * as i0 from "@angular/core";
export class ImageModule {
}
ImageModule.ɵmod = i0.ɵɵdefineNgModule({ type: ImageModule });
ImageModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ImageModule_Factory(t) { return new (t || ImageModule)(); }, imports: [[
            RouterModule,
            CommonModule,
            DirectiveModule,
            MDBBootstrapModule,
            LazyLoadImageModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ImageModule, { declarations: [ImageComponent], imports: [RouterModule,
        CommonModule,
        DirectiveModule,
        MDBBootstrapModule,
        LazyLoadImageModule], exports: [ImageComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImageModule, [{
        type: NgModule,
        args: [{
                declarations: [ImageComponent],
                exports: [ImageComponent],
                imports: [
                    RouterModule,
                    CommonModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                    LazyLoadImageModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=image.module.js.map