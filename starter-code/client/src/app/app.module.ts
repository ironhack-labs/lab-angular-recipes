import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './routes';


import { DishesService } from "./services/dishes.service"
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { IngredientsService } from 'app/services/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    DetailListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService,
    IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
