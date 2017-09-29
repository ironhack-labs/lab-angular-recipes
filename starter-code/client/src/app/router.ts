import { Routes } from '@angular/router';

import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    { path: 'e/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
