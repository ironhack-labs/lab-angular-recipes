import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { DishesService } from './services/dishes.service';

import {Routes, RouterModule} from '@angular/router';
import { DishesListComponent } from './dishes-list/dishes-list.component';

const ruta : Routes =[
  {path: "home", component: DishesListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ruta)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
