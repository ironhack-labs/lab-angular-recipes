import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';



export const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full'},
  { path: 'dishes', component: DishesListComponent},
  { path: 'dishes/:id', component:SingleDishComponent}
];