import { Routes, RouterModule } from '@angular/router';
import { GetListComponent } from '../getList/getList.component';
import { GetElementComponent } from '../getElement/getElement.component';
import { ServiceIngredientsService } from '../Service/service-ingredients.service';

export const routes: Routes = [
  { path: '', component: GetListComponent },
  { path: 'list/:id', component: GetElementComponent }
];

