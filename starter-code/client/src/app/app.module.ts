import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DishesServices } from './services/Dishes.services';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { routes } from './routes';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    OneRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
