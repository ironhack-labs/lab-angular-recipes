import { Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    { path: '**', redirectTo: '' }
];
