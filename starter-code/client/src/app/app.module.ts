import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipesService } from '../service/recipes.service';
import { IngredientsService } from '../service/ingredients.service';
import { AppComponent } from './app.component';
import { DishesComponent } from '../app/dishes/dishes.component';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { SingleDishesComponent } from '../app/single-dishes/single-dishes.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    SingleDishesComponent,
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
