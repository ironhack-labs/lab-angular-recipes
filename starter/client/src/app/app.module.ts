import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { routes } from './app.routes';
import { DishService } from './shared/services/dish.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { DishListComponent } from './components/dish/dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
