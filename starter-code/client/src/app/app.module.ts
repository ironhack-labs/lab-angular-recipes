import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

import {routes} from './routes'
import {RetrieveDishesService} from '../app/services/retrieve-dishes.service';
import {IngredientsService} from '../app/services/ingredients.service'
import { DishDetailComponent } from './dish-detail/dish-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    DishDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveDishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
