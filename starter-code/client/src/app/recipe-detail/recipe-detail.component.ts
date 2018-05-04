import { Component, OnInit } from "@angular/core";
import { ListingRecipesService } from "../listing-recipes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
  providers: [ListingRecipesService]
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private listingRecipesService: ListingRecipesService,
    private route: ActivatedRoute
  ) {}

  recipe: object = {};
  ngOnInit() {
    let id = "";
    this.route.params.subscribe(params => (id = params.id));

    this.listingRecipesService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
