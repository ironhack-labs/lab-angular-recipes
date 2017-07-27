import { Routes } from '@angular/router';

import { SingleDishesComponent } from './single-dishes/single-dishes.component';
import { DishesComponent } from './dishes/dishes.component';

export const routes: Routes = [
    { path: '', component: DishesComponent },
    { path: 'dishes/:id', component: SingleDishesComponent },
    { path: '**', redirectTo: '' }
];
