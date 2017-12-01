import { Routes } from "@angular/router";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



const routes: Routes = [
  { path: 'home',  component:  RecipesListComponent },
  { path: 'recipeDetail/:id',  component: RecipeDetailComponent },
   { path: '**', redirectTo: 'home' }
];

export {routes};
