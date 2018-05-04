import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListDishComponent } from '../list-dish/list-dish.component';
import { routes} from './routes';
import { DishService } from '../services/dish.service';
import { RouterModule } from '@angular/router';
import { SingleDishComponent } from '../single-dish/single-dish.component';
import { IngredientsService } from 'services/ingredients.service';


@NgModule({
  declarations: [
    AppComponent,
    ListDishComponent,
    SingleDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [DishService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


