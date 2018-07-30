import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { RecipesService } from 'services/recipes.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { IngredientsService } from 'services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleDishComponent,
    AddIngredientsComponent,
    AddDishesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
