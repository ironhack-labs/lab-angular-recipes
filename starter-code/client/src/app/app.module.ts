import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { RouterModule } from "@angular/router";


import { RecipesService } from './recipes.service';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
