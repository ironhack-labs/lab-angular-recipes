import { Routes } from '@angular/router';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'

import { RecipesListComponent } from './recipes-list/recipes-list.component';

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    { path: 'e/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
