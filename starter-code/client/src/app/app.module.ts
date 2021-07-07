import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page/recipe-detail-page.component';
import { IngredientsListPageComponent } from './pages/ingredients-list-page/ingredients-list-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { DisplayRecipesComponent } from './components/display-recipes/display-recipes.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:id', component: RecipeDetailPageComponent },
  { path: 'ingredients', component: IngredientsListPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayRecipesComponent,
    HomePageComponent,
    RecipeDetailPageComponent,
    NotFoundPageComponent,
    IngredientsListPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DishesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
