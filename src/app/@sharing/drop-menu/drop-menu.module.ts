import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropMenuComponent } from './drop-menu.component';



@NgModule({
  declarations: [DropMenuComponent],
  exports: [DropMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DropMenuModule { }
