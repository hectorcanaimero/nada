import { makeStateKey } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class ServerStateInterceptor {
    constructor(transferState) {
        this.transferState = transferState;
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const storedResponse = this.transferState.get(makeStateKey(req.url), null);
        if (storedResponse) {
            const response = new HttpResponse({ body: storedResponse, status: 200 });
            return of(response);
        }
        return next.handle(req);
    }
}
ServerStateInterceptor.ɵfac = function ServerStateInterceptor_Factory(t) { return new (t || ServerStateInterceptor)(i0.ɵɵinject(i1.TransferState)); };
ServerStateInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ServerStateInterceptor, factory: ServerStateInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ServerStateInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.TransferState }]; }, null); })();
//# sourceMappingURL=serverstate.interceptor.js.map