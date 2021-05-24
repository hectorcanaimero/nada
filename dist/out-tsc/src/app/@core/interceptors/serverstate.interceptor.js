import { __decorate } from "tslib";
import { makeStateKey } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
let ServerStateInterceptor = class ServerStateInterceptor {
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
ServerStateInterceptor = __decorate([
    Injectable()
], ServerStateInterceptor);
export { ServerStateInterceptor };
//# sourceMappingURL=serverstate.interceptor.js.map