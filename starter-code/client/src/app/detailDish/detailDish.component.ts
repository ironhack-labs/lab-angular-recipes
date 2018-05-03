import { Component, OnInit } from '@angular/core';
import { ListDishService } from "../list-dish.service";
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from "../ingredient.service";
import { subscribeOn } from 'rxjs/operator/subscribeOn';

export interface Single {
  name: string,
  image: string,
  description: string,
  ingredients: [
    {
      ingredientsId: {name: string},
      quantity: number
    }
  ]
}

@Component({
  selector: 'app-detailDish',
  templateUrl: './detailDish.component.html',
  styleUrls: ['./detailDish.component.css'],
  providers: [ListDishService, IngredientService ]
})
export class DetailDishComponent implements OnInit {
  singleDish: object = {};
  ingredients: object = {};
  constructor(private listDishService: ListDishService,   private route: ActivatedRoute, private ingredientService: IngredientService ) { }

  ngOnInit() {
    let id = ""
    this.route.params.subscribe((params) => id = (params.id))
    this.listDishService
    .getSingleDish(id)
      .subscribe(oneDish => {
        this.singleDish = oneDish;
      });
      this.ingredientService
      .getAllIngredients().subscribe(ingredients => {
        this.ingredients = ingredients;
      })
     
     
  }
  addIngredient(dishId, ingId, quantity){
this.ingredientService.addIngredient(dishId, ingId, quantity.value).subscribe(ing => {
  quantity.value,
  dishId,
  ingId
})
  }

}
