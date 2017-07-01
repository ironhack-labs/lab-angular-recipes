import { Routes } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { OneDishComponent } from './one-dish/one-dish.component';


export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'dishes/:id', component: OneDishComponent },
    { path: '**', redirectTo: '' }
];
