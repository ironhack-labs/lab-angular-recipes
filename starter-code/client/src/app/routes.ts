import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

export const routes: Routes = [
  { path:'', component:DishesListComponent},
  { path:'/dish:id', component:DishDetailsComponent}
];