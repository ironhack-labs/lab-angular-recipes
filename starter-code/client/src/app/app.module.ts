import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { RecipesService } from 'services/recipes.service';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { SingleDishComponent } from './single-dish/single-dish.component'

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
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
