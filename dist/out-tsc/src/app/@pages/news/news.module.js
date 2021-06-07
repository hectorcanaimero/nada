import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PipesModule } from '@core/pipes/pipes.module';
import { SidebarModule } from '@sharing/sidebar/sidebar.module';
import { SemDataModule } from '@sharing/sem-data/sem-data.module';
import { DirectiveModule } from '@core/directives/directive.module';
import { NewsComponent } from './news.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const app = [{ path: ':id', component: NewsComponent }];
export class NewsModule {
}
NewsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NewsModule });
NewsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NewsModule_Factory(t) { return new (t || NewsModule)(); }, imports: [[
            PipesModule,
            CommonModule,
            SemDataModule,
            SidebarModule,
            DirectiveModule,
            MDBBootstrapModule,
            RouterModule.forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NewsModule, { declarations: [NewsComponent], imports: [PipesModule,
        CommonModule,
        SemDataModule,
        SidebarModule,
        DirectiveModule,
        MDBBootstrapModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NewsModule, [{
        type: NgModule,
        args: [{
                declarations: [NewsComponent],
                imports: [
                    PipesModule,
                    CommonModule,
                    SemDataModule,
                    SidebarModule,
                    DirectiveModule,
                    MDBBootstrapModule,
                    RouterModule.forChild(app)
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=news.module.js.map