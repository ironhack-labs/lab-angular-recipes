import { Routes } from '@angular/router';
import { MyDishesComponent } from './my-dishes/my-dishes.component';

const routes: Routes = [
    { path: '', component: MyDishesComponent },

   //{ path: '**', redirectTo: '' }
 ];
export { routes };
