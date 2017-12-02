import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { MyDishesComponent } from './my-dishes/my-dishes.component';
import { DishesService } from './services/dishes.service';

@NgModule({
  declarations: [
    AppComponent,
    MyDishesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
