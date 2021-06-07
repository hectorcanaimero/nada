import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SemDataComponent } from './sem-data.component';



@NgModule({
  declarations: [SemDataComponent],
  exports: [SemDataComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
  ]
})
export class SemDataModule { }
