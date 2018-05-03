import { Routes } from "@angular/router";
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';

export const routes: Routes = [
  { path: '', component: ListRecipesComponent },
  { path: 'recipe/:id', component: DetailsRecipeComponent },
  { path: '**', redirectTo: '' }
];