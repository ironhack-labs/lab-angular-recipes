import { Routes, RouterModule } from '@angular/router';
import { ListAllDishesComponent } from './listAllDishes/listAllDishes.component';
import { DishComponent } from './dish/dish.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListAllDishesComponent },
  { path: "dish/:id", component: DishComponent }
];

export const RoutesRoutes = RouterModule.forChild(routes);
