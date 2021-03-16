import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HelperModule } from '../../../component/helper/helper.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HelperModule,
    PipesModule,
    AutocompleteLibModule,
    MDBBootstrapModule,
    NgxSkeletonLoaderModule
  ]
})
export class HeaderModule { }
