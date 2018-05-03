import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { RetrieveDishService } from './Services/retrieve-dish.service';
import { RetrieveIngredientsService } from './Services/retrieve-ingredients.service';

import { AppComponent } from './app.component';
import { DisplayDishesComponent } from './display-dishes/display-dishes.component';
import { routes } from '../routes'
import { DisplayDishComponent } from './display-dish/display-dish.component';

const routesA: Routes = routes;


@NgModule({
  declarations: [
    AppComponent,
    DisplayDishesComponent,
    DisplayDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [RetrieveDishService, RetrieveIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
