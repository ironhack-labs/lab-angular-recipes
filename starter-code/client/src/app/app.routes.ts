import { DishComponent } from './dish/dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: 'dish/:id', component: DishComponent },
  { path: '**', redirectTo: '' }
];