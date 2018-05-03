import { DisplayDishesComponent } from "app/display-dishes/display-dishes.component";
import { DisplayDishComponent } from "app/display-dish/display-dish.component";

import { Routes } from "@angular/router";


export const routes: Routes = [
  { path: '', component: DisplayDishesComponent },
  { path: 'home', component: DisplayDishesComponent},
  { path: 'home/:id', component: DisplayDishComponent}];