import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DishesListPageComponent } from './dishes-list-page/dishes-list-page.component';
import { DishesService } from './api/dishes.service';
import { AppRoutingModule } from './app-routing.module';
import { DishDetailsPageComponent } from './dish-details-page/dish-details-page.component';
import { IngredientService } from './api/ingredient.service';
import { AddDishPageComponent } from './add-dish-page/add-dish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListPageComponent,
    DishDetailsPageComponent,
    AddDishPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishesService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
