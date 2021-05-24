import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SortPipe } from './sort.pipe';
import { FiltroPipe } from './filtro.pipe';
import { TruncatePipe } from './truncate.pipe';
import { LojafilterPipe } from './lojafilter.pipe';
let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    NgModule({
        declarations: [
            SafePipe,
            SortPipe,
            FiltroPipe,
            TruncatePipe,
            LojafilterPipe,
        ],
        exports: [
            SafePipe,
            SortPipe,
            FiltroPipe,
            TruncatePipe,
            LojafilterPipe,
        ],
        imports: [
            CommonModule
        ]
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map