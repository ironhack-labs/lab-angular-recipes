import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesService } from 'service/dishesService';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
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
