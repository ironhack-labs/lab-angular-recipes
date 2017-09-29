import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesService} from './services/dishes.service'
import { IngredientsService } from './services/ingredients.service'

import { AppComponent } from './app.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';

import { RecipiesListComponent } from './recipies-list/recipies-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
