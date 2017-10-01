import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DishesListService } from './services/dishes-list.service';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';

const routes: Routes = [
  { path: '',              component: DishesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
