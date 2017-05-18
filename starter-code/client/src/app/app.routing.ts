import { Routes } from '@angular/router';

import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'api/dishes', pathMatch: 'full'},
  { path: 'api/dishes', component: ListRecipesComponent },
  { path: 'api/dishes/:id', component: SingleRecipeComponent},
  { path: 'api/ingredients', component: SingleRecipeComponent }
]
