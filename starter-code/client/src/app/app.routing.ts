import { Routes } from '@angular/router';

import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishListComponent } from './dish-list/dish-list.component';

export const routes: Routes = [
    { path: '', component: DishDetailsComponent },
    { path: 'dish/:id', component: DishListComponent },
    { path: '**', redirectTo: '' }
];
