import { Routes } from '@angular/router';
 import { RecipeListComponent } from './recipe-list/recipe-list.component';
 import { DetailListComponent } from './detail-list/detail-list.component';
import { IngredientsService } from 'app/services/ingredients.service';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: DetailListComponent},
    { path: 'ingredients', component:  DetailListComponent},
    //{ path: '**', redirectTo: '' }
];