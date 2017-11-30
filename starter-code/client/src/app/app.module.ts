import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

import { RecipesService } from './../services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
