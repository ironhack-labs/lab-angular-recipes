import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DishesListService } from './services/dishes-list.service';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

const routes: Routes = [
  { path: '',              component: DishesListComponent },
  { path: 'dishes/:id',    component: DishDetailsComponent },
  { path: 'post-dish',     component: AddDishComponent},
  { path: 'add-ing',       component: AddIngredientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailsComponent,
    AddDishComponent,
    AddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
