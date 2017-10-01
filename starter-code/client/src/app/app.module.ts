import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DishesListService } from './services/dishes-list.service';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';

const routes: Routes = [
  { path: '',              component: DishesListComponent },
  { path: 'dishes/:id',    component: DishDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailsComponent,
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
