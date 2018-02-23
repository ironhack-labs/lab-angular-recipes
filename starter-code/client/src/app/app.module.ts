import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { DishesService } from 'app/services/dishes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
