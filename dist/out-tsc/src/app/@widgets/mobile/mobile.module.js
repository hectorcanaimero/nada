import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';
import { ResponsiveModule } from 'ngx-responsive';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LinkModule } from '@sharing/link/link.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { OfertasModule } from '@widgets/ofertas/ofertas.module';
import { MobileLinkModule } from '@sharing/mobile-link/mobile-link.module';
import { SelectLojaModule } from '@sharing/select-loja/select-loja.module';
import { environment } from 'src/environments/environment.prod';
import * as i0 from "@angular/core";
import * as i1 from "ngx-responsive";
export class MobileModule {
}
MobileModule.ɵmod = i0.ɵɵdefineNgModule({ type: MobileModule });
MobileModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MobileModule_Factory(t) { return new (t || MobileModule)(); }, imports: [[
            LinkModule,
            FormsModule,
            PipesModule,
            CommonModule,
            RouterModule,
            OfertasModule,
            MobileLinkModule,
            SelectLojaModule,
            MDBBootstrapModule,
            ResponsiveModule.forRoot(environment.responsive)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MobileModule, { declarations: [MobileComponent], imports: [LinkModule,
        FormsModule,
        PipesModule,
        CommonModule,
        RouterModule,
        OfertasModule,
        MobileLinkModule,
        SelectLojaModule,
        MDBBootstrapModule, i1.ResponsiveModule], exports: [MobileComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MobileModule, [{
        type: NgModule,
        args: [{
                declarations: [MobileComponent],
                exports: [MobileComponent],
                imports: [
                    LinkModule,
                    FormsModule,
                    PipesModule,
                    CommonModule,
                    RouterModule,
                    OfertasModule,
                    MobileLinkModule,
                    SelectLojaModule,
                    MDBBootstrapModule,
                    ResponsiveModule.forRoot(environment.responsive)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=mobile.module.js.map