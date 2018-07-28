import { Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";


export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'dishes/:id', component: RecipeDetailComponent },
  { path: 'recipeform', component: RecipeFormComponent },
  { path: 'ingredientform', component: IngredientFormComponent },
];
