import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';


export const routes: Routes = [
   { path: '',  component: DishesListComponent },
   { path: ':id', component: SingleDishComponent }
];
