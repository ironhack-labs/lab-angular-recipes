import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipeService } from './services/recipe.service';
import { IngredientsService } from './services/ingredients.service';


const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipePageComponent }
];

@NgModule({
  declarations: [AppComponent, RecipeListComponent, RecipePageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
