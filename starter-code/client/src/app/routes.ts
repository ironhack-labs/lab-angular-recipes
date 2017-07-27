import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    children: [
      { path: 'new-recipe', component: NewRecipeComponent }
    ],
    { path: ':id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
