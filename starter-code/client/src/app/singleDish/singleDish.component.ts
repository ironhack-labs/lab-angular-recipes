import { Component, OnInit } from "@angular/core";
import { DishesServicesService } from "../dishesServices.service";
import { ActivatedRoute } from "@angular/router";
import { IngredientsServicesService } from "../ingredientsServices.service";



@Component({
  selector: "app-singleDish",
  templateUrl: "./singleDish.component.html",
  styleUrls: ["./singleDish.component.css"]
})
export class SingleDishComponent implements OnInit {
  single: any;
  ingredients:Array<object>=[];
  
  constructor(
    public allDishes: DishesServicesService,
    private router: ActivatedRoute,
    private ingredientServices: IngredientsServicesService,
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.allDishes
        .retrieveSingle(params.id)
        .subscribe(pepe => (this.single = pepe));
    });
    
    this.router.params.subscribe(params => {
      this.ingredientServices
        .getIngredients(params.id)
        .subscribe(pepe => (this.ingredients = pepe));
    });

    
  }
  saveIngredients(id,ingredient_id, qty){
    this.ingredientServices.saveIngredients(id,ingredient_id, qty.value).subscribe( res => console.log(res))
  }
      
}