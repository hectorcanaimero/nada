import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RedirectGuard {
    constructor() { }
    canActivate(route) {
        window.location.href = route.data['externalUrl'];
        return true;
    }
}
RedirectGuard.ɵfac = function RedirectGuard_Factory(t) { return new (t || RedirectGuard)(); };
RedirectGuard.ɵprov = i0.ɵɵdefineInjectable({ token: RedirectGuard, factory: RedirectGuard.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RedirectGuard, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=redirect.guard.js.map