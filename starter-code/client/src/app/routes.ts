import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    // { path: '**', redirectTo: '' }
];
