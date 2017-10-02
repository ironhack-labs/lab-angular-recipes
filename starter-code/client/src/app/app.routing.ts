import { Routes } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { OneDishComponent } from './one-dish/one-dish.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';


export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'dishes/:id', component: OneDishComponent },
    { path: 'ingredients', component: IngredientsListComponent },
    { path: '**', redirectTo: '' }
];
