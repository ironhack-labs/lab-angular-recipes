import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesService } from './services/Recipes.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes.routing';
import { RecipeComponent } from './components/Recipe/Recipe.component';
import { RecipeListComponent } from './components/RecipeList/RecipeList.component';
import { IngredientListComponent } from './components/ingredientList/ingredientList.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
