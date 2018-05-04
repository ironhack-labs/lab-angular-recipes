import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesService } from './services/dishes.service';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    DishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
