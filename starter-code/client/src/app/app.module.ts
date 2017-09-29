import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DisplayService } from './display.service'
import {RouterModule} from '@angular/router'
import {routes} from './route'
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientsShowService } from './ingredients-show.service'
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
  providers: [ DisplayService,
              IngredientsShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
