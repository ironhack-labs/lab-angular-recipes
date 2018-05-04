import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { AllDishesService } from './services/all-dishes.service';

import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { AllIngredientsService } from './services/all-ingredients.service';



@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    SingleDishComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AllDishesService, AllIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
