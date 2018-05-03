import { Routes } from '@angular/router';
import { MyDishesComponent } from './my-dishes/my-dishes.component';
import { SingleDishComponent } from './single-dish/single-dish.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: MyDishesComponent },
  { path: 'dish/:id', component: SingleDishComponent},
];
