import {Routes} from '@angular/router';
import {DisplaydishComponent} from './displaydish/displaydish.component'
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component'

export const routes: Routes = [
  {path: '', component: DisplaydishComponent},
  {path: 'dishes/:id', component: RecipesDetailsComponent},
  {path: '**', redirectTo: ''},

]
