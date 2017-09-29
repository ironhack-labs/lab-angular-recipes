import { Routes } from '@angular/router';

import { DishesListComponent } from './dishes-list/dishes-list.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';

export const routes: Routes = [
  { path: '', component: DishesListComponent },
  { path: 'dish/:id', component: DishDetailComponent },
  { path: '**', redirectTo: '' }
]
