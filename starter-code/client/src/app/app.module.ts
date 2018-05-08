import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DishesService } from './api/dishes.service';
import { AppRoutingModule } from './app-routing';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { IngridientsService } from './ingridients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HomePageComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [ DishesService, IngridientsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
