import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DishApiService } from './dish-api.service';

import { AppComponent } from './app.component';
import { DishListComponent } from './pages/dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DishDetailsComponent } from './pages/dish-details/dish-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DishApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
