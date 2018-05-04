import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IngredientsService } from "../ingredients.service";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.css"]
})
export class RecipesDetailComponent implements OnInit {
  recipe: any;
  ingredient: any;
  ingredients: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private RecipesService: RecipesService,
    private IngredientsService: IngredientsService
  ) {
    route.params.subscribe(params => {
      RecipesService.get(params.id).subscribe(recipe => {
        this.recipe = recipe;
      });
    });
  }

  ngOnInit() {
    this.IngredientsService.getIngredients().subscribe(
      list => (this.ingredient = list)
    );
  }
  aIngredient(quantity, recipe, ingredient) {
    this.IngredientsService.aIngredient(
      quantity,
      recipe,
      ingredient
    ).subscribe(() => console.log(" ingrediente añadido"));
  }
}
