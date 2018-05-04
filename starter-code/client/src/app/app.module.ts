import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './RecipesList/RecipesList.component';
import { RecipesService } from './Recipes.service';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { RecipeSingleComponent } from './RecipeSingle/RecipeSingle.component';
import { IngredientsService } from './Ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeSingleComponent
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
