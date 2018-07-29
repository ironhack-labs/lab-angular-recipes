import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../node_modules/@angular/router";
import { DishesService } from "../services/dishes.service";
import { map } from "../../../node_modules/rxjs/operators";
import { IngredientsService } from "../services/ingredients.service";

@Component({
  selector: "app-dish-view",
  templateUrl: "./dish-view.component.html",
  styleUrls: ["./dish-view.component.css"]
})
export class DishViewComponent implements OnInit {
  dish: object = {};
  ingredients:any=[]
  constructor(public route: ActivatedRoute, public dS: DishesService,public iS:IngredientsService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.dish = this.dS.getDish(params["id"]);
      this.iS.getingredients().subscribe(ingredients=>this.ingredients=ingredients)

    });

  }

  addIngredient(quantity:number,ingredientId,dishId):any{
    this.iS.addIngredientToDish(quantity,ingredientId,dishId).subscribe(dish=>{
      this.dish=dish
    })
  }
}
