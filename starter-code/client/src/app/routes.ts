import { Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { ComidaDetailComponent } from './comida-detail/comida-detail.component';


export const routes: Routes = [
    { path: '', component: ListRecipesComponent},
    { path: 'dishes/:id', component:ComidaDetailComponent },
    { path: '**', redirectTo: '' }
];