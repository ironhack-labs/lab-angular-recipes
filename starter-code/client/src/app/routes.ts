import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
const myRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: ListRecipesComponent },
  { path: ':id',  component: SingleRecipeComponent }
];

export { myRoutes };
