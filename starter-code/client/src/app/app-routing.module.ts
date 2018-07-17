import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { DishesListPageComponent } from './dishes-list-page/dishes-list-page.component';
import { DishDetailsPageComponent } from './dish-details-page/dish-details-page.component';
import { AddDishPageComponent } from './add-dish-page/add-dish-page.component';

const routes: Routes = [
  {path: "", component: DishesListPageComponent},
  {path: "dish/add", component: AddDishPageComponent},
  {path: "dish/:dishId", component: DishDetailsPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})

export class AppRoutingModule { }
