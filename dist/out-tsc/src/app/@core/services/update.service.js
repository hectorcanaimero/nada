import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
let UpdateService = class UpdateService {
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
};
UpdateService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UpdateService);
export { UpdateService };
//# sourceMappingURL=update.service.js.map