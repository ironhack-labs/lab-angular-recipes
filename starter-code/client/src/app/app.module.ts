import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyDishesComponent } from './my-dishes/my-dishes.component';
import { DishesServiceService } from './dishes-service.service';
import {routes} from './routes';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { MyIngredientsService } from './my-ingredients.service';

@NgModule({
  declarations: [AppComponent, MyDishesComponent, SingleDishComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [DishesServiceService, MyIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
