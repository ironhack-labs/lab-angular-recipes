import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dishes', pathMatch: 'full'},
    { path: 'dishes', component: DishesComponent},
    { path: 'dishes/:id', component:SingleDishComponent},
    { path: 'dishes/add/dish', component:AddDishesComponent},
    { path: 'dishes/add/ingredient', component:AddIngredientsComponent}
  ];