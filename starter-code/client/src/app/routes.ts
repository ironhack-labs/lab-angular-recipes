import { Routes } from "@angular/router";
import { MyDishesComponent } from './my-dishes/my-dishes.component'
import { OneDishComponent } from './one-dish/one-dish.component';

export const routes: Routes = [
  { path: '',  component: MyDishesComponent },
  { path: ':id',  component: OneDishComponent },
  { path: '**', redirectTo: '' },
];
