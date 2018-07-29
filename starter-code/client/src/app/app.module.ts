import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DishesService } from 'services/dishes.service';
import { IngredientsService } from 'services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  //Revisar si los servicios se agregan en app module o no
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
