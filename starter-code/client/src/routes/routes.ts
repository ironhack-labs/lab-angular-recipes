import { Routes } from '@angular/router';
import { RecipesListComponent } from './../app/recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './../app/single-recipe/single-recipe.component';

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    { path: 'recipe/:id', component: SingleRecipeComponent },
    { path: '**', redirectTo: '' }
];
