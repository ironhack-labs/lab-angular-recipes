import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListOfDishesComponent } from './pages/list-of-dishes/list-of-dishes.component';
import { ListDishesService } from './services/list-dishes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOfDishesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListDishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
