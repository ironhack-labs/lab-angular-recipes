import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: "", component: RecipesComponent },
  { path: ":id", component: RecipeDetailComponent },
];