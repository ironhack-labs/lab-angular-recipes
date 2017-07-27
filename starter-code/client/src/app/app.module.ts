import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'
import { RetrieveDishesService } from './services/retrieve-dishes.service'

import { AppComponent } from './app.component';
import { MyDishesComponent } from './my-dishes/my-dishes.component';
import { OneDishComponent } from './one-dish/one-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDishesComponent,
    OneDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveDishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
