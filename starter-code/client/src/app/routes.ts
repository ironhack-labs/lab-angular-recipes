import {Routes} from '@angular/router';
import { ListRecipesComponent} from './list-recipes/list-recipes.component';
import { DetailRecipesComponent } from './detail-recipes/detail-recipes.component';

export const routes=[
{ path: '',component:ListRecipesComponent},
{path:'dishes/:id',component:DetailRecipesComponent}
] ;

