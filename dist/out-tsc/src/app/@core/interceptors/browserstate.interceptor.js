import { __decorate } from "tslib";
import { makeStateKey } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
let BrowserStateInterceptor = class BrowserStateInterceptor {
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
};
BrowserStateInterceptor = __decorate([
    Injectable()
], BrowserStateInterceptor);
export { BrowserStateInterceptor };
//# sourceMappingURL=browserstate.interceptor.js.map