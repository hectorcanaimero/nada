import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
export class UpdateService {
    constructor(updates) {
        this.updates = updates;
        if (updates.isEnabled) {
            interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
                .then(() => console.log('checking for updates')));
        }
    }
    checkForUpdates() {
        this.updates.available.subscribe(event => this.promptUser());
    }
    promptUser() {
        console.log('updating to new version');
        this.updates.activateUpdate()
            .then(() => document.location.reload());
    }
}
UpdateService.ɵfac = function UpdateService_Factory(t) { return new (t || UpdateService)(i0.ɵɵinject(i1.SwUpdate)); };
UpdateService.ɵprov = i0.ɵɵdefineInjectable({ token: UpdateService, factory: UpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UpdateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SwUpdate }]; }, null); })();
//# sourceMappingURL=update.service.js.map