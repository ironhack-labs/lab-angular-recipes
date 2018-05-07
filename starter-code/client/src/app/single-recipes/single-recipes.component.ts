import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DishesService, Dishes } from "../dishes.service";
import { IngredientsService, Ingredient } from "../ingredients.service";

@Component({
  selector: "app-single-recipes",
  templateUrl: "./single-recipes.component.html",
  styleUrls: ["./single-recipes.component.css"]
})
export class SingleRecipesComponent implements OnInit {
  dishesId: string;
  dishes: Dishes;
  ingredients: Ingredient[];

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: DishesService,
    public apiIngredient: IngredientsService,
    private resTruc: Router
  ) {}

  ngOnInit() {
    this.reqTruc.paramMap.subscribe(myParams => {
      this.dishesId = myParams.get("blahId");
      this.fetchDishesData(this.dishesId);
    });

    this.apiIngredient.getList()
    .then((result: Ingredient[]) => {
      this.ingredients = result;
    })
    .catch(err => {
      console.log(err)
    })
  }

  fetchDishesData(id: string) {
    this.apiTruc.getDetails(id)
    .then((result: Dishes)=>{
      this.dishes = result;
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  addIngredient(id, ingredientId) {
    
  }
}
