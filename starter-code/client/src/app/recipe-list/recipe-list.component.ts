import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RecipesService } from "../services/recipes.service";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
  providers: [RecipesService]
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<any>;
  constructor(dishService: RecipesService) {
    this.recipes$ = dishService.getList();
  }

  ngOnInit() {}
}
