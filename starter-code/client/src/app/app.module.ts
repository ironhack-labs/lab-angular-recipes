import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RetrieveService } from './retrieve.service';
import { DishListComponent } from './dish-list/dish-list.component';
import { OneDishComponent } from './one-dish/one-dish.component';
import { IngredientsService } from './ingredients.service';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: DishListComponent },
  { path: ':id', component: OneDishComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    OneDishComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
