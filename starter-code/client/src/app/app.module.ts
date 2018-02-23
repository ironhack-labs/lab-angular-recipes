import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { DishesService } from 'services/dishes';
import { IngredientService } from 'services/ingredient';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [DishesService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
