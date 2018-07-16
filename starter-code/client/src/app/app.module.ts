import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DishApiService } from './dish-api.service';
import { IngredientsApiService } from './ingredients-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DishApiService, IngredientsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
