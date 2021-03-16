import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const app: Routes = [
  {
    path: '', component: HomeComponent
  }
]

export const HOME_ROUTE = RouterModule.forChild(app)
