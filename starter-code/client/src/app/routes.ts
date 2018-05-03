import { Routes } from '@angular/router';
import { ListDishComponent } from 'list-dish/list-dish.component';
import { SingleDishComponent } from 'single-dish/single-dish.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: ListDishComponent },
    { path: 'dish/:id', component: SingleDishComponent },


];