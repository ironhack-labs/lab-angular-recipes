import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import 'rxjs/operator/toPromise';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { DishesService } from './api/dishes.service';
import { IngredientsService } from './api/ingredients.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    OneRecipeComponent
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
