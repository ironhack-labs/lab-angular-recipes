import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { Routes } from "@angular/router";
import { DishComponent } from './dish/dish.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: ListDishesComponent },
    { path: 'dish/:id', component: DishComponent }
  ];