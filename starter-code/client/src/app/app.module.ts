import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishList } from 'services/dishes.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    SingleDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishList],
  bootstrap: [AppComponent]
})
export class AppModule { }
