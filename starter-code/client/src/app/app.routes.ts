import { DishesComponent } from './dishes/dishes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: DishesComponent },
  { path: '**', redirectTo: '' }
];