import { Routes } from '@angular/router';

import { ListAllComponent } from './list-all/list-all.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

export const routes: Routes = [
  {path: '', component: ListAllComponent},
  {path: 'details/:id', component: RecipesDetailsComponent},
  {path: '**', redirectTo: ''}
]
