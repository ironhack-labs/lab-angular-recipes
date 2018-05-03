import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { ListAllDishesComponent } from './listAllDishes/listAllDishes.component';
import {routes} from './routes.routing';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllDishesComponent,
    DishComponent
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
