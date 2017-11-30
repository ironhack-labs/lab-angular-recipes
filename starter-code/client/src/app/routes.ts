import { Routes } from '@angular/router';

// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    { path: '**', redirectTo: '' }
];
