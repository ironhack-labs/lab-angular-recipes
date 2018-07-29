import { Routes } from "@angular/router";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';

export const routes: Routes = [
  { path: '',  component: RecipesListComponent },
  { path: ':id',  component: SingleRecipeComponent },
  { path: 'new/recipe', component: NewRecipeComponent },
  { path: 'new/ingredient', component: NewIngredientComponent }
]
