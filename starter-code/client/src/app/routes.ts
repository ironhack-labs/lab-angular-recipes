import { Routes } from '@angular/router';
import { RecipiesListComponent } from './recipies-list/recipies-list.component'

export const routes: Routes = [
    { path: '', component: RecipiesListComponent },
    //{ path: 'entry/:id', component: SingleEntryComponent },
    { path: '**', redirectTo: '' }
];
