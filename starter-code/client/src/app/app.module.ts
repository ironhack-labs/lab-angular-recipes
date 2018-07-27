import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { RecipesService } from 'services/recipes.service';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component'
import { IngredientsService } from 'services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    SingleDishComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
