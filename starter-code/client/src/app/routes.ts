import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';


export const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: ':id', component: SingleRecipeComponent},
  { path: ':id/details', component: DishDetailsComponent },
  { path: '**', redirectTo: ''},
]