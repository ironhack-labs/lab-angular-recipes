import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesService } from '../services/dishes.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
