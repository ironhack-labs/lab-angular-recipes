import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { routes } from '../routes';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesService } from './services/dishes.service';
import { DishViewComponent } from './dish-view/dish-view.component';
import { IngredientsService } from './services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
    

  ],
  providers: [DishesService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
