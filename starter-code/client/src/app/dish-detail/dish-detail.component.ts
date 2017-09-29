import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

import { DishesService } from '../services/dishes.service'
import { IngredientsService } from '../services/ingredients.service'

interface Dish{
  _id: string
  name: string
  image: string
  description: string
  __v: number
  ingredients: Array<string>
}

interface Ingredient{
  _id: string
  name: string
  image: string
  description: string
  __v: number
}

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dishId: string
  dish: Dish
  ingredients: Array<Ingredient>

  constructor(private dishesService: DishesService, private ingredientsService: IngredientsService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe( params => {
      this.dishId = params['dishId']
      this.dishesService.getDish(this.dishId)
        .subscribe( dish => this.dish = dish)
      })

    this.ingredientsService.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients
      })
  }

  addIngredientToDish(ingredientId, quantity){
    this.dishesService.postIngredientInDish(this.dishId, ingredientId, quantity)
      .subscribe( dish => this.dish = dish )
  }
}
