import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {SingleRecipeComponent} from './single-recipe/single-recipe.component';

export const routes: Routes = [
  { path: '', component: DishesComponent},
  { path: ':id', component: SingleRecipeComponent},
  { path: '', redirectTo: ''}

]
