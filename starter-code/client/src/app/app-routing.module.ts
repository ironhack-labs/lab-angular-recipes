import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DishesComponent } from './dishes/dishes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
// import { IngredientsService } from './ingredients.service';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'dishes' , component: DishesComponent },
  { path: 'dishes/:dishId', component: RecipeDetailsComponent },
  // { path: 'ingredients/:dishId', component: IngredientsService }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }