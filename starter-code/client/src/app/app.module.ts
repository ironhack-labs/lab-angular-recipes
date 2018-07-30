import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DishesService} from './dishes.service'
import { AppComponent } from './app.component';
import { ListdishesComponent } from './listdishes/listdishes.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { IngredientsService } from './ingredients.service';
import { DishFormComponent } from './dish-form/dish-form.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

const routes: Routes = [
  { path: '',  component: ListdishesComponent },
  { path: "add-recipe", component: DishFormComponent },
  { path: "add-ingredient", component: IngredientFormComponent },
 { path: ':id',  component: SingleDishComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListdishesComponent,
    SingleDishComponent,
    DishFormComponent,
    IngredientFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


