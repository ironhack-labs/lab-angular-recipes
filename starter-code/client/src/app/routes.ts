import { Routes } from '@angular/router';
import { ComiditaListComponent } from './comidita-list/comidita-list.component'


export const routes: Routes = [
    { path: '', component: ComiditaListComponent},
    // { path: 'phone/:id', component: PhoneDetailsComponent},
    { path: '**', redirectTo: '' }
];