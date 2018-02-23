import { Routes } from '@angular/router';
import { ComiditaComponent } from './comidita/comidita.component';

export const routes: Routes = [
    { path: '', component: ComiditaComponent},
    { path: '**', redirectTo: '' }
];