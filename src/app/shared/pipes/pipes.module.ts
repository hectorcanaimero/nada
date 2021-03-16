import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { TruncatePipe } from './truncate.pipe';
import { SafePipe } from './safe.pipe';
import { SortPipe } from './sort.pipe';
import { LojafilterPipe } from './lojafilter.pipe';
import { LazyDirective } from '../directive/lazy.directive';



@NgModule({
  declarations: [FiltroPipe, TruncatePipe, SafePipe, SortPipe, LojafilterPipe, LazyDirective],
  exports: [FiltroPipe, TruncatePipe, SafePipe, SortPipe, LojafilterPipe, LazyDirective],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
