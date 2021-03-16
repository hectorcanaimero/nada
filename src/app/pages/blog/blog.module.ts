import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { DetailComponent } from './detail/detail.component';
import { AsideComponent } from './aside/aside.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AllInComponent } from './all-in/all-in.component';
import { PipesModule } from '../../shared/pipes/pipes.module';


const app: Routes = [
  { path: '', component: BlogComponent },
  { path: ':slug', component: DetailComponent },
  { path: ':first/:slug', component: AllInComponent }
];


@NgModule({
  declarations: [BlogComponent, DetailComponent, AsideComponent, AllInComponent],
  imports: [
    PipesModule,
    FormsModule,
    CommonModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    RouterModule.forChild(app)
  ]
})
export class BlogModule { }
