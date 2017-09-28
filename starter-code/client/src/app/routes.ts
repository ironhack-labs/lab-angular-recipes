import { Routes } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component'

export const routes: Routes = [
    { path: '', component: RecipesListComponent },
    // { path: 'entry/:id', component: SingleEntryComponent },
    { path: '**', redirectTo: '' }
];
