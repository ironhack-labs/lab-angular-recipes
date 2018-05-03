import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ListingRecipesService } from './listing-recipes.service';
import { RecipesRouterRoutes } from './recipes-router.routing';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RecipesRouterRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
