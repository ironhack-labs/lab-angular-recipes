import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

export const routes: Routes = [
  { path: "", component: RecipesComponent },
  { path: "add-recipe", component: RecipeFormComponent },
  { path: "add-ingredient", component: IngredientFormComponent },
  { path: ":id", component: RecipeDetailComponent }
];