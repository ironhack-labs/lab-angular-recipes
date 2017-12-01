import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';
import {routes} from './routes';

import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    SingleDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DishesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
