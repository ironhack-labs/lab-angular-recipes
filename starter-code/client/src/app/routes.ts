import { Routes } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

export const routes: Routes = [
  { path:'', component: RecipesListComponent},
  { path:'dish/:id', component:SingleDishComponent}
];