import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let RedirectGuard = class RedirectGuard {
    constructor() { }
    canActivate(route) {
        window.location.href = route.data['externalUrl'];
        return true;
    }
};
RedirectGuard = __decorate([
    Injectable()
], RedirectGuard);
export { RedirectGuard };
//# sourceMappingURL=redirect.guard.js.map