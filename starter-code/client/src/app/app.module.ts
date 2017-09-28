import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DishesService} from './services/dishes.service'

import { AppComponent } from './app.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';

import { RecipiesListComponent } from './recipies-list/recipies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesListComponent,
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
