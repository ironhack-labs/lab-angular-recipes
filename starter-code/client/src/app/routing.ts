import { Routes } from '@angular/router';

import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish-list/dish-list.component';

export const routes: Routes = [
    { path: '', component: DishListComponent },
    { path: 'phone/:id', component: DishComponent },
    { path: '**', redirectTo: '' }
];
