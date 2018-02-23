import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DishesService } from 'app/services/dishes.service';
import { SingleRecipeComponent } from './components/single-recipe/single-recipe.component';
import { IngredientsService } from 'app/services/ingredients.service';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'single-recipe/:id', component: SingleRecipeComponent},
  { path: 'dishes/:recipeId/ingredients/:id/add', component: SingleRecipeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DishesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
