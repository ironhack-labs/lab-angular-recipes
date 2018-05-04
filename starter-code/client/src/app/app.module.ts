import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { DishesServiceService } from './services/dishes-service.service';
import { IngredientsServiceService } from './services/ingredients-service.service';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ListDishesComponent },
  { path: 'dish/:id', component: SingleDishComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    SingleDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesServiceService,IngredientsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
