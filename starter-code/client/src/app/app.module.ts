import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishIngredientsComponent } from './dish-ingredients/dish-ingredients.component';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish-list/dish-list.component';

import { RouterModule } from "@angular/router";
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    DishIngredientsComponent,
    DishComponent,
    DishListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
