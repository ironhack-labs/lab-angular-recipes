import { Routes } from "@angular/router";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component:  RecipesListComponent },
  { path: 'recipeDetail/:id',  component: RecipeDetailComponent },
];

export {routes};
