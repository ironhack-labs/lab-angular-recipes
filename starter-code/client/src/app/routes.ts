import { Routes } from '@angular/router';
 import { RecipeListComponent } from './recipe-list/recipe-list.component';
 import { DetailListComponent } from './detail-list/detail-list.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: DetailListComponent},
];

