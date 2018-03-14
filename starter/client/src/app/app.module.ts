import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { routes } from './app.routes';
import { DishListComponent } from './components/dish/dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
