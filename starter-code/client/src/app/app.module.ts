import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { recipesService } from 'service/recipes.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { ingredientsService } from 'service/ingredients.service';
import { NewrecipeComponent } from './newrecipe/newrecipe.component';
import { NewingredientComponent } from './newingredient/newingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    SingleRecipeComponent,
    NewrecipeComponent,
    NewingredientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [recipesService, ingredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
