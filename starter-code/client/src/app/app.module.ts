import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesService } from 'services/dishes.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientsService } from 'services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    SingleDishComponent,
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
