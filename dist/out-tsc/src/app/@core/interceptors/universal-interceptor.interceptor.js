import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as i0 from "@angular/core";
export class UniversalInterceptor {
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
}
UniversalInterceptor.ɵfac = function UniversalInterceptor_Factory(t) { return new (t || UniversalInterceptor)(i0.ɵɵinject(REQUEST, 8)); };
UniversalInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: UniversalInterceptor, factory: UniversalInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniversalInterceptor, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [REQUEST]
            }] }]; }, null); })();
//# sourceMappingURL=universal-interceptor.interceptor.js.map