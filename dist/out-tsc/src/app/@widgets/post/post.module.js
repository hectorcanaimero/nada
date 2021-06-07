import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { TituloModule } from '@sharing/titulo/titulo.module';
import { PostComponent } from './post.component';
import * as i0 from "@angular/core";
export class PostModule {
}
PostModule.ɵmod = i0.ɵɵdefineNgModule({ type: PostModule });
PostModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            RouterModule,
            TituloModule,
            MDBBootstrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PostModule, { declarations: [PostComponent], imports: [PipesModule,
        CommonModule,
        RouterModule,
        TituloModule,
        MDBBootstrapModule], exports: [PostComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PostModule, [{
        type: NgModule,
        args: [{
                declarations: [PostComponent],
                exports: [PostComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    RouterModule,
                    TituloModule,
                    MDBBootstrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=post.module.js.map