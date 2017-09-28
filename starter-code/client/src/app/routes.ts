import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';


export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'dishes/:id', component: SingleDishComponent},
  { path: '**', redirectTo: '' }
];
