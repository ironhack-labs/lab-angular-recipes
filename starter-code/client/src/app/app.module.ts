import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
import {RecepieControllerService} from '../services/recepieController.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeIngredientComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [RecepieControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
