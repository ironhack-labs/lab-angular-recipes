import { Routes, RouterModule } from "@angular/router";
import { DishComponent } from "./dish/dish.component";
import { DetailDishComponent } from "./detailDish/detailDish.component";

export const routes: Routes = [
  { path: "", component: DishComponent },
  { path: ":id", component: DetailDishComponent }
]