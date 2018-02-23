import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { DisplayDishes } from 'services/displaydishes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayDishes],
  bootstrap: [AppComponent]
})
export class AppModule { }
