import { Routes, RouterModule } from "@angular/router";
import { SingleDishComponent } from "./singleDish/singleDish.component";
import { AllDishesComponent } from "./allDishes/allDishes.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: AllDishesComponent
  },
  {
    path: ":id",
    component: SingleDishComponent
  }
];
