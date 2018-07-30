import { Routes } from "@angular/router";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesSingleComponent } from "./recipes-single/recipes-single.component";

export const routes: Routes = [
  { path: '', redirectTo:'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesListComponent},
  { path: ':id', component: RecipesSingleComponent}
]