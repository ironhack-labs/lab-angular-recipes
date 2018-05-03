import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {routes} from './routes';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesService } from './services/dishes.service'
import { IngredientsService } from './services/ingredients.service';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


const routesA: Routes = routes;

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleDishComponent,
    IngredientsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
