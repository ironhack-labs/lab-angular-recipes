import { Routes } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

export const routes: Routes = [
    { path: '', component: DishListComponent },
    { path: 'dish/:id', component: SingleDishComponent },
    { path: '**', redirectTo: '' }
];
