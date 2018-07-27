import { Component, OnInit } from "@angular/core";
import { recipesService } from "service/recipes.service";

@Component({
  selector: "app-list-recipes",
  templateUrl: "./list-recipes.component.html",
  styleUrls: ["./list-recipes.component.css"]
})
export class ListRecipesComponent implements OnInit {
  recipe;
  constructor(public recipesService: recipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipe = recipes;
    });
  }
}
