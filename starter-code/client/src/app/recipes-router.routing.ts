import { Routes, RouterModule } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: ":id", component: RecipeDetailComponent }
];

export const RecipesRouterRoutes = RouterModule.forRoot(routes);
