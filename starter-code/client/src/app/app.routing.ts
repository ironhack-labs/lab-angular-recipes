import { Routes } from '@angular/router';

import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

export const routes: Routes = [
  { path: '', component: DishListComponent },
    { path: 'dish/:id', component: DishDetailsComponent },
    { path: '**', redirectTo: '' }
];

