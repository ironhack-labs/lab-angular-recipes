import { Routes } from '@angular/router';
import { ListAllComponent } from './list-all/list-all.component';
import { SingleComponentComponent } from './single-component/single-component.component';



export const routes: Routes = [
   { path: '',  component: ListAllComponent },
   { path: ':id', component: SingleComponentComponent}
];
