import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {EntryListService} from './dishes.service';
import { routes } from './app.routing';

import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
