import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllDishesComponent } from './allDishes/allDishes.component';
import { DishesServicesService } from './dishesServices.service';
import { SingleDishComponent } from './singleDish/singleDish.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.routing';
import { IngredientsServicesService } from './ingredientsServices.service';

@NgModule({
  declarations: [
    AppComponent,
    AllDishesComponent,
    SingleDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesServicesService, IngredientsServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
