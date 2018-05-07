import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DishesService } from './api/dishes.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { IngredientsService } from './ingredients.service';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    HomePageComponent,
    RecipeDetailsComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
