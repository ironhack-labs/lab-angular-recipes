import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

import { routes } from './routes';

import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';



@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    SingleRecipeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
