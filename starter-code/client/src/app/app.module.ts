import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from "@angular/router";
import {DishesService} from './dishes.service';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientsService } from 'app/ingredients.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'entry/:id', component: SingleDishComponent },
  { path: 'home',  component:DishesComponent },
  
];


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
  providers: [DishesService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
