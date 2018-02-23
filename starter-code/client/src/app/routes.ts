import { Routes } from '@angular/router';
import { ComiditaListComponent } from './comidita-list/comidita-list.component'
import { ComiditaDetailComponent } from 'app/comidita-detail/comidita-detail.component';


export const routes: Routes = [
    { path: '', component: ComiditaListComponent},
    { path: 'dishes/:id', component: ComiditaDetailComponent},
    { path: '**', redirectTo: '' }
];