import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DishesService} from './services/dishes.service';

import {IngredientsService} from './services/ingredients.service';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import {RouterModule} from '@angular/router';

import {routes} from './routes';
import { DishesDetailsComponent } from './dishes-details/dishes-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    DishesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
