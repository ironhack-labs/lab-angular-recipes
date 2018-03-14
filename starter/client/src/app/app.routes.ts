import { DishItemComponent } from './components/dish/dish-item/dish-item.component';
import { DishBaseComponent } from './components/dish/dish-base/dish-base.component';
import { HomeComponent } from './components/misc/home/home.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dishes/:id', component: DishBaseComponent,
        children: [
            { path: '', component: DishItemComponent },
            // { path: 'edit', component: DishEditComponent }
        ]
    }
];
