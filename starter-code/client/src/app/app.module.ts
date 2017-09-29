import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {RecipesService} from './services/recipes.service';
import { UnicDishComponent } from './unic-dish/unic-dish.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    UnicDishComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ RecipesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
