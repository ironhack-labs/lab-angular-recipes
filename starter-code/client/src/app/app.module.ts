import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishApiService } from './services/dish-api.service';
import { IngredientApiService } from './services/ingredient-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishApiService, IngredientApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
