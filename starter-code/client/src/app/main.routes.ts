import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { Routes } from "@angular/router";
import { DishItemComponent } from './dish-item/dish-item.component';

export const routes: Routes = [
    {path: '', component: ListDishesComponent},
    {path: 'dish/:id', component: DishItemComponent},
]