import { Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    { path: 'recipe/:id', component: SingleRecipeComponent },
    // { path: '**', redirectTo: '' }
];
