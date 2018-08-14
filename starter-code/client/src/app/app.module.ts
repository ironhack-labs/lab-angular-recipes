import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';

import { DishService } from './services/dish.service';
import { DishDetailsComponent } from './dish-details/dish-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
