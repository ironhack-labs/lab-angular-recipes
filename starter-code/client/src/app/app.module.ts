import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { ShohDishesComponent } from './shoh-dishes/shoh-dishes.component';
import { DishesService } from './dishes.service';
import { SingleDishComponent } from './single-dish/single-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    ShohDishesComponent,
    SingleDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
