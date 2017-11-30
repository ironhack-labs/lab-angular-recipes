import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipe/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
