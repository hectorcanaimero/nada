import { makeStateKey } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class BrowserStateInterceptor {
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
BrowserStateInterceptor.ɵfac = function BrowserStateInterceptor_Factory(t) { return new (t || BrowserStateInterceptor)(i0.ɵɵinject(i1.TransferState)); };
BrowserStateInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: BrowserStateInterceptor, factory: BrowserStateInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BrowserStateInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.TransferState }]; }, null); })();
//# sourceMappingURL=browserstate.interceptor.js.map