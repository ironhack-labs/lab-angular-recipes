import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../../services/dish.service';
import { IngredientService } from '../../../services/ingredient.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish: object = { }
  ingredients: any = []

  constructor(public route: ActivatedRoute, public dS: DishService, public iS: IngredientService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dish = this.dS.getDish(params['id']);
      this.iS.getIngredients().subscribe(ingredients =>this.ingredients = ingredients)
    });
  }

  addIngredient(quantity:number, ingredientId, dishId):any{
    this.iS.addIngredientToDish(quantity, ingredientId, dishId).subscribe(dish =>{
      this.dish=dish
    })
  }
}
