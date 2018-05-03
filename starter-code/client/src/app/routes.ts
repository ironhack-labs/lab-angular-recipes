import { Routes } from '@angular/router';
import { ListAllComponent } from './list-all/list-all.component';



export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home',  component: ListAllComponent }
];
