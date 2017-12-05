import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule, Routes } from '@angular/router';

import { dishesService } from '../services/dishes.service';
//import { ingredientsService } from '../services/ingredients.service';

import { routes } from './routes';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    IngredientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [dishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
