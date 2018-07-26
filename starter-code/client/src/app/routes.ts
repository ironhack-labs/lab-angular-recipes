import { Routes } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DishListComponent },
  { path: 'single/:id', component: SingleDishComponent}
];