import { __decorate, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
let UniversalInterceptor = class UniversalInterceptor {
    constructor(request) {
        this.request = request;
    }
    intercept(req, next) {
        let serverReq = req;
        if (this.request && req.url.indexOf('http') !== 0) {
            let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
            if (!req.url.startsWith('/')) {
                newUrl += '/';
            }
            newUrl += req.url;
            serverReq = req.clone({ url: newUrl });
        }
        return next.handle(serverReq);
    }
};
UniversalInterceptor = __decorate([
    Injectable(),
    __param(0, Optional()), __param(0, Inject(REQUEST))
], UniversalInterceptor);
export { UniversalInterceptor };
//# sourceMappingURL=universal-interceptor.interceptor.js.map