import { Routes } from '@angular/router';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'
import { RecipesListComponent } from './recipes-list/recipes-list.component'

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    { path: 'recipe/:id', component: SingleRecipeComponent },
    { path: 'addIngredients', component: SingleRecipeComponent }
    // { path: '**', redirectTo: '' }
];
