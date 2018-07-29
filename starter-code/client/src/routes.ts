import { AppComponent } from "./app/app.component";
import { DishesListComponent } from "./app/dishes-list/dishes-list.component";
import { DishViewComponent } from "./app/dish-view/dish-view.component";

export const routes:Array<object>=[
    {path:"",component:DishesListComponent},
    {path:"dish/:id",component:DishViewComponent},

]