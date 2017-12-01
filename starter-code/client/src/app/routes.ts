import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
const myRoutes: Routes = [
  { path: '',  component: ListRecipesComponent },
  { path: 'addDish',  component: AddDishComponent },
  { path: 'addIngredient',  component: AddIngredientComponent },
  { path: ':id',  component: SingleRecipeComponent }

];

export { myRoutes };
