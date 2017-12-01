import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipesService } from './services/recipes.service';
import { IngredientsService } from './services/ingredients.service';
import { RouterModule } from '@angular/router';
import { myRoutes } from './routes';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
