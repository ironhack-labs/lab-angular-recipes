import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { RecipeBookService } from '../services/recipe-book.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
