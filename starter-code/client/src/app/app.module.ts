import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DishService } from './services/dish.service';
import { PageDishesComponent } from './pages/page-dishes/page-dishes.component';
import { PageDishDetailComponent } from './pages/page-dish-detail/page-dish-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dishes', pathMatch: 'full'},
  {path: 'dishes', component: PageDishesComponent},
  {path: 'dishes/:id', component: PageDishDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PageDishesComponent,
    PageDishDetailComponent,
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
