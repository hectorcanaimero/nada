import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SortPipe } from './sort.pipe';
import { FiltroPipe } from './filtro.pipe';
import { TruncatePipe } from './truncate.pipe';
import { LojafilterPipe } from './lojafilter.pipe';
import * as i0 from "@angular/core";
export class PipesModule {
}
PipesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PipesModule });
PipesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PipesModule, { declarations: [SafePipe,
        SortPipe,
        FiltroPipe,
        TruncatePipe,
        LojafilterPipe], imports: [CommonModule], exports: [SafePipe,
        SortPipe,
        FiltroPipe,
        TruncatePipe,
        LojafilterPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=pipes.module.js.map