import { Routes } from "@angular/router";
import { DishesComponent } from "./dishes/dishes.component";
import { SingleDishComponent } from "./single-dish/single-dish.component";


export const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: 'home', component: DishesComponent},
  { path: ':id', component: SingleDishComponent},
  { path: '**', redirectTo: '' }
];