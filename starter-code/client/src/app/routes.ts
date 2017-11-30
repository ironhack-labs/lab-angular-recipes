import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
const myRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '',  component: ListRecipesComponent },
];

export { myRoutes };
