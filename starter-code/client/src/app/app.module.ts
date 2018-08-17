import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RetrieveDishesService } from './retrive-dishes/retrieve-dishes.service';
import { RetrieveIngredientsService  } from './retrieve-ingredients/retrieve-ingredients.service'
import { DishesComponent } from './dishes/dishes.component';
import { TheDishComponent } from './the-dish/the-dish.component'


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    TheDishComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [RetrieveDishesService, RetrieveIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
