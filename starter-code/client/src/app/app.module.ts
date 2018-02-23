import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { DishesComponent } from './components/dishes/dishes.component';
import { SingleDishComponent } from './components/single-dish/single-dish.component';

import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';

const routes: Routes = [
  { path: '',  component: DishesComponent },
  { path: 'dish/:id',  component: SingleDishComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
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
