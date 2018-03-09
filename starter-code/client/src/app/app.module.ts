import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayDishesComponent } from './display-dishes/display-dishes.component';
import { RouterModule, Routes } from '@angular/router';
import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { NewDishComponent } from './new-dish/new-dish.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: DisplayDishesComponent},
  { path: 'newDish', component: NewDishComponent},
  { path: 'newIng', component: NewIngredientComponent},
  { path: ':id',  component: SingleDishComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDishesComponent,
    SingleDishComponent,
    NewDishComponent,
    NewIngredientComponent
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
