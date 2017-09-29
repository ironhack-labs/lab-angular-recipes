import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesService } from './services/dishes.service';
import { routes } from './router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
