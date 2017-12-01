import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { routes } from './routes';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { IngredientComponent } from './ingredient/ingredient.component';

import { DishesService } from '../service/dishes.service';
import { IngredientService } from '../service/ingredient.service';
import { DetailsDishComponent } from './details-dish/details-dish.component'


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    IngredientComponent,
    DetailsDishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
