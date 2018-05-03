import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {routes} from './routes';
import { DishesService } from './services/dishes.service'
import { SingleDishComponent } from './single-dish/single-dish.component';

const routesA: Routes = routes;

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleDishComponent
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
