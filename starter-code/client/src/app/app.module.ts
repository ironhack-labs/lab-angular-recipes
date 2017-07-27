import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

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
    RouterModule.forRoot(routes),
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
