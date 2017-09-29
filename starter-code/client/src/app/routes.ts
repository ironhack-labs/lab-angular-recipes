import { Routes } from '@angular/router';

import { DishesRecipesComponent } from './dishes-recipes/dishes-recipes.component';
import { DishesDetailsComponent } from './dishes-details/dishes-details.component';


export const routes: Routes = [
    { path: '', component: DishesRecipesComponent },
    { path: 'dishes/:id', component: DishesDetailsComponent },
    { path: '**', redirectTo: '' }
];
