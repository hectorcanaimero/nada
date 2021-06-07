import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './@core/interceptors/universal-interceptor.interceptor';
import * as i0 from "@angular/core";
export class AppServerModule {
}
AppServerModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppServerModule, bootstrap: [AppComponent] });
AppServerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppServerModule_Factory(t) { return new (t || AppServerModule)(); }, providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UniversalInterceptor,
            multi: true,
        },
    ], imports: [[
            AppModule,
            ServerModule,
            ServerTransferStateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppServerModule, { imports: [AppModule,
        ServerModule,
        ServerTransferStateModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppServerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AppModule,
                    ServerModule,
                    ServerTransferStateModule
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: UniversalInterceptor,
                        multi: true,
                    },
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=app.server.module.js.map