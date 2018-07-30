import { Routes } from '@angular/router';
import { DishesListComponent } from 'app/dishes-list/dishes-list.component';
import { DishComponent } from 'app/dish/dish.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dishes', pathMatch: 'full'},
    { path: 'dishes', component: DishesListComponent},
    { path: 'dishes/:id', component: DishComponent},
  ];