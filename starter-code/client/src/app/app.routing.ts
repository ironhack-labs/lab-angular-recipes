import { Routes } from "@angular/router";
import { DishesListComponent } from "./dishes-list/dishes-list.component";
import { SingleDishComponent } from "./single-dish/single-dish.component";

export const routes:Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: DishesListComponent },
  { path: 'recipe/:slug', component: SingleDishComponent }
];
