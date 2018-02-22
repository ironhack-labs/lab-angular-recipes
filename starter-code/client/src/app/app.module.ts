import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryRecipesComponent } from './entry-recipes/entry-recipes.component';
import { RecipesService } from 'service/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryRecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
