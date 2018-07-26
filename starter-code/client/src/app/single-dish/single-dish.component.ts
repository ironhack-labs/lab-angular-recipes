import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from 'services/ingredients.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish:any;
  id:string;
  ingredients:any;
  constructor(public dishService: DishesService, public router: ActivatedRoute, public ingredientsService:IngredientsService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.dishService.getById(this.id).subscribe(data => this.dish = data)
    })
    this.ingredientsService.getIngredients().subscribe(data => this.ingredients = data)
  }
  addIngredientToDish(dishId,id, quantity){
    console.log(dishId,id, quantity.value)
    this.dishService.addIngredientToDish(dishId,id, quantity.value).subscribe(dish => {
      console.log(dish)
      this.dish = dish
    })
  }
}
