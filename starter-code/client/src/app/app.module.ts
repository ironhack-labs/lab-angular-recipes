import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
//Components
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
//Services
import { DishesService } from 'app/services/dishes.service';
import { IngredientsService } from 'app/services/ingredients.service';

//Routes
const routes: Routes = [
  { path: '',  component: RecipesComponent },
  { path: 'recipe/:id',  component: RecipeDetailComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
