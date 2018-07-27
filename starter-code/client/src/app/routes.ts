import { Routes } from "@angular/router";
import { ListRecipesComponent } from "./list-recipes/list-recipes.component";
import { SingleRecipeComponent } from "./single-recipe/single-recipe.component";
import { NewrecipeComponent } from "./newrecipe/newrecipe.component";
import { NewingredientComponent } from "./newingredient/newingredient.component";

export const routes: Routes = [
  { path: '', component: ListRecipesComponent },
  { path: 'detail/:id', component: SingleRecipeComponent },
  { path: "newrecipe", component: NewrecipeComponent },
  { path: "newingredient", component: NewingredientComponent },
];
