import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipesService } from './recipes.service'
import { IngredientsService } from './ingredients.service'
import { RouterModule } from '@angular/router'
import { routes } from './routes'

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    SingleRecipeComponent,
    NewRecipeComponent,
    NewIngredientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
