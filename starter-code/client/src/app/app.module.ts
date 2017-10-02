import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from "./pages/recipe-details/recipe-details.component"

import { DishServiceService } from './services/dish-service.service';
import { IngredientServiceService } from './services/ingredient-service.service';



@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishServiceService,
  IngredientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
