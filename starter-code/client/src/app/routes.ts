import { Routes } from '@angular/router';

import { DishesDetailsComponent } from './dishes-details/dishes-details.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
   { path: 'dishes/:id', component: DishesDetailsComponent },
    { path: '**', redirectTo: '' }
];
