import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import {RecipesService} from './services/recipes.service';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
