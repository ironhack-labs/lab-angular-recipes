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
import { DishBaseComponent } from './components/dish/dish-base/dish-base.component';
import { DishItemComponent } from './components/dish/dish-item/dish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishListComponent,
    DishBaseComponent,
    DishItemComponent
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
