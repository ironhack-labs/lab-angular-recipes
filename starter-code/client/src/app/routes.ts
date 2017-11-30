import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    { path: 'home', component: RecipeListComponent },
    // { path: 'phone/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: 'home' }
];
