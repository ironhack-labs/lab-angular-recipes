import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './app-routing-module';
import { DishesService } from './dishes.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleRecipesComponent } from './single-recipes/single-recipes.component';
import { IngredientsService } from './ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    SingleRecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
