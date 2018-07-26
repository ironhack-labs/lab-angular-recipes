import { Routes } from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { DishFormComponent } from './dish-form/dish-form.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';



export const routes: Routes = [
  { path: '', redirectTo: 'dishes', pathMatch: 'full'},
  { path: 'dishes', component: DishesListComponent},
  { path: 'dishes/:id', component:SingleDishComponent},
  { path: 'dishes/add/dish', component:DishFormComponent},
  { path: 'dishes/add/ingredient', component:IngredientFormComponent}
];