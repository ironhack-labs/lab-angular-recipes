import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../services/recipes.service";
import { IngredientsService } from "../services/ingredients.service";

@Component({
  selector: "app-detail-recipes",
  templateUrl: "./detail-recipes.component.html",
  styleUrls: ["./detail-recipes.component.css"]
})
export class DetailRecipesComponent implements OnInit {
  recipe: any;
  id: string;
  ingredients: any;

  constructor(
    public recipesSevice: RecipesService,
    public router: ActivatedRoute,
    public ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.recipesSevice.getId(this.id).subscribe(data => (this.recipe = data));
    });
    this.ingredientsService
      .getIngredients()
      .subscribe(data => (this.ingredients = data));
  }
  addIngredientToDish(dishId, id, quantity) {
    console.log(dishId, id, quantity.value);
    this.recipesSevice
      .addIngredientToRecipe(dishId, id, quantity.value)
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }
}