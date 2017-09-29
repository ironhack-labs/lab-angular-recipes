import { Routes } from '@angular/router';

import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { DishesDetailsComponent} from './dishes-details/dishes-details.component';

export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    { path: 'dishes/:id', component: DishesDetailsComponent },
    { path: '**', redirectTo: '' }
];
