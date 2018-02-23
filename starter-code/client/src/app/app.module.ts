import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipesService } from "../services/recipes.service";

import { AppComponent } from './app.component';
import { EntryRecipesComponent } from './entry-recipes/entry-recipes.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { RouterModule } from '@angular/router';
import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    EntryRecipesComponent,
    SingleRecipeComponent,
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
