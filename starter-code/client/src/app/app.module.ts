import { routes } from './main.routes';
import { DishesService } from './services/dishes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { DishItemComponent } from './dish-item/dish-item.component';
import { IngredientService } from './services/ingredient.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    DishItemComponent,
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
