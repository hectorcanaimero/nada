import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropMenuComponent } from './drop-menu.component';
let DropMenuModule = class DropMenuModule {
};
DropMenuModule = __decorate([
    NgModule({
        declarations: [DropMenuComponent],
        exports: [DropMenuComponent],
        imports: [
            CommonModule,
            RouterModule,
        ]
    })
], DropMenuModule);
export { DropMenuModule };
//# sourceMappingURL=drop-menu.module.js.map