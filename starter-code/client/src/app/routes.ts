import { Routes } from '@angular/router';
import { FoodComponent } from "./component/food/food.component";
import { UnitfoodComponent } from "./component/unitfood/unitfood.component";

export const routes: Routes = [
  { path: '/', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recipes', component: FoodComponent },
  { path: 'recipe/:id', component: UnitfoodComponent},
];