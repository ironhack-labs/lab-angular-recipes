import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesAllComponent } from './recipes-all/recipes-all.component';
import { RecipeService } from 'services/recipes.service';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { IngredientService } from 'services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesAllComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService,IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
