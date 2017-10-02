import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../../services/recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((data: any[]) => {
      this.recipes = data;
    });
  }
}
