import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DishesService} from './services/dishes.service';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
