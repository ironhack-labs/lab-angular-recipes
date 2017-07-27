import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { RecipesService } from '../services/Recipes.service';
import { IngredientsService } from '../services/Ingredients.service';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    SingleRecipeComponent,
    NewRecipeComponent,
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
