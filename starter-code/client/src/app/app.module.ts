import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DishService } from './services/dish.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { MyDishComponent } from './components/my-dish/my-dish.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'dish/:id', component: MyDishComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DishListComponent,
    MyDishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
