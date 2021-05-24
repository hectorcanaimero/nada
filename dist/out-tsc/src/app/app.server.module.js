import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './@core/interceptors/universal-interceptor.interceptor';
let AppServerModule = class AppServerModule {
};
AppServerModule = __decorate([
    NgModule({
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
    })
], AppServerModule);
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map