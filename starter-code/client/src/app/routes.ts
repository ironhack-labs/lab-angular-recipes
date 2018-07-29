import { Routes } from '@angular/router';

import { ShohDishesComponent } from './shoh-dishes/shoh-dishes.component';
import { SingleDishComponent } from './single-dish/single-dish.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShohDishesComponent},
  { path: 'single/:id', component: SingleDishComponent}
];