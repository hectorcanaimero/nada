import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HelperModule } from 'src/app/component/helper/helper.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { RouterModule } from '@angular/router';

import { LinkModule } from '@sharing/link/link.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    LinkModule,
    PipesModule,
    CommonModule,
    RouterModule,
    HelperModule,
    MDBBootstrapModule,
    AutocompleteLibModule,
  ]
})
export class HeaderModule { }
