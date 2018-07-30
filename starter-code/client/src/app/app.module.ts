import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishlistComponent } from './components/dishlist/dishlist.component';
import { SingleDishComponent } from './components/single-dish/single-dish.component';
/* import { IngredientService } from 'services/ingredient.service'; */
import { DishService } from 'services/dish.service';

@NgModule({
  declarations: [AppComponent, DishlistComponent, SingleDishComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [/* IngredientService, */ DishService],
  bootstrap: [AppComponent]
})

export class AppModule {}
