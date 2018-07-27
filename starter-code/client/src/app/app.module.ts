import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesList } from './recipes-list/recipes-list.component';
import { Recipe } from './recipe/recipe.component';

//services
import { RecipesService } from './recipes.service';
import { IngredientsService } from './Ingredients.service';

//routes
import routes from './routes';

@NgModule({
  declarations: [
    AppComponent,
    RecipesList,
    Recipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
