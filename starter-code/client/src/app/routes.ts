import { Routes } from "@angular/router"
import { RecipesAllComponent } from "./recipes-all/recipes-all.component";
import { SingleRecipeComponent } from "./single-recipe/single-recipe.component";

export const routes: Routes = [
  { path: "", component: RecipesAllComponent},
  { path: ":id", component: SingleRecipeComponent},
  { path: "**", redirectTo: ""},
]