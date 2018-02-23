import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

import { DishesService } from './services/dishes.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IngredientsService } from './services/ingredients.service';

const routes: Routes = [
  { path: '' , component: RecipesListComponent, pathMatch:'full' },
  { path: 'recipe/:id', component: RecipeDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    HomePageComponent,
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
