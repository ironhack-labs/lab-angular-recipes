import { Routes } from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {SingleRecipeComponent} from './single-recipe/single-recipe.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe/:id', component: SingleRecipeComponent },
];