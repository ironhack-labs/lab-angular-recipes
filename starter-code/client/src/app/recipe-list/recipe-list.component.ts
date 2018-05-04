import { Component, OnInit } from "@angular/core";
import { ListingRecipesService } from "../listing-recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
  providers: [ListingRecipesService]
})
export class RecipeListComponent implements OnInit {
  recipes: Array<object> = [];
  constructor(private listingRecipesService: ListingRecipesService) {}

  ngOnInit() {
    this.listingRecipesService
      .getRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }
}
