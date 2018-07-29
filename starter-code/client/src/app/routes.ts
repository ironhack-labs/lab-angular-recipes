import { Routes } from '@angular/router';
import { RecipesList } from './recipes-list/recipes-list.component';
import { Recipe } from './recipe/recipe.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path:"home", component: RecipesList },
  { path: "recipe/:id", component: Recipe }
];