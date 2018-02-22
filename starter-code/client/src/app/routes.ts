import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

export const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: ':id', component: SingleRecipeComponent},
  { path: '**', redirectTo: ''},
]