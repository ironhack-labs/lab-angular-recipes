import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { DishesRecipesComponent } from './dishes-recipes/dishes-recipes.component';
import { DishesService } from './dishes.service';
import { DishesDetailsComponent } from './dishes-details/dishes-details.component'

@NgModule({
  declarations: [
    AppComponent,
    DishesRecipesComponent,
    DishesDetailsComponent,
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
