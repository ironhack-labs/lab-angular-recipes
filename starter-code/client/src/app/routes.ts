import { Routes } from '@angular/router';

import { UnicDishComponent } from './unic-dish/unic-dish.component';
import { DishComponent } from './dish/dish.component';

export const routes: Routes = [
    { path: '', component: DishComponent },
    { path: 'dish/:id', component: UnicDishComponent },
    { path: '**', redirectTo: '' }
];
