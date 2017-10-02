import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DishApiService } from './dish-api.service';
import { IngredientApiService } from './ingredient-api.service';

import { AppComponent } from './app.component';
import { DishListComponent } from './pages/dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DishDetailsComponent } from './pages/dish-details/dish-details.component';
import { IngredientFormComponent } from './pages/dish-details/ingredient-form/ingredient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
    IngredientFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DishApiService,
    IngredientApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
