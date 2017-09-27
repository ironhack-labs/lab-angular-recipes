import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeService } from './services/recipe.service';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
