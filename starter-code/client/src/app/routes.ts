import { Routes } from '@angular/router';
import { DishesComponent } from './dishes/dishes.component';
import { SinglerecipeComponent } from './singlerecipe/singlerecipe.component';

export const routes: Routes = [
  { path: 'home', component: DishesComponent },
  { path: 'singledish/:id', component: SinglerecipeComponent }
]