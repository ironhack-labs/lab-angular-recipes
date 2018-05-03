import { Routes } from "@angular/router";
import { RecipesListComponent } from "./RecipesList/RecipesList.component";
import { RecipeSingleComponent } from "./RecipeSingle/RecipeSingle.component";

export const routes: Routes = [
  //{ path: '', redirectTo:'home', pathMatch:'full'},
  { path: '', component: RecipesListComponent},
  { path: ':id', component: RecipeSingleComponent}
]