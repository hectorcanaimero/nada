import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './safe.pipe';
import { SortPipe } from './sort.pipe';
import { FiltroPipe } from './filtro.pipe';
import { TruncatePipe } from './truncate.pipe';
import { LojafilterPipe } from './lojafilter.pipe';

@NgModule({
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
export class PipesModule { }
