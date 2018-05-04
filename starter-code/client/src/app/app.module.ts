import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';


import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
@NgModule({
  declarations: [AppComponent, RecipesListComponent, RecipeDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [RecipeService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
