import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishListComponent } from './pages/dish-list/dish-list.component';
import { DishDetailsComponent } from './pages/dish-details/dish-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', component: DishListComponent },
    { path: 'dish/:dishId', component: DishDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
