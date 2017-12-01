import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

import { routes } from './../routes/routes';

import { RecipesService } from './../services/recipes.service';
import { IngredientsService } from './../services/recipes.service';

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
  providers: [
    RecipesService,
    IngredientsService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
