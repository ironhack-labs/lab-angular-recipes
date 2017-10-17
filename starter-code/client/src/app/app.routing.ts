import { Routes } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    { path: ':id', component: SingleRecipeComponent},
    { path: '**', redirectTo: '' }
];
