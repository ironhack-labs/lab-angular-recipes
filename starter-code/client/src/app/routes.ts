import { Routes } from '@angular/router';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    // { path: 'phone/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: '' }
];
