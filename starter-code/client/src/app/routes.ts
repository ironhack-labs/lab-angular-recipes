import { Routes } from '@angular/router';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'dishes/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
