import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DishesService } from './services/dishes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
