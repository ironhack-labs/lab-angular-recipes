import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RetrieveDishesService } from './services/retrieve-dishes.service';
import { DisplayRecipesComponent } from './components/display-recipes/display-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    RetrieveDishesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
