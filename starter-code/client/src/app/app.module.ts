import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyDishesComponent } from './my-dishes/my-dishes.component';
import { DishesServiceService } from './dishes-service.service';

@NgModule({
  declarations: [AppComponent, MyDishesComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [DishesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
