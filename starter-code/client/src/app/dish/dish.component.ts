import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})

export class DishComponent implements OnInit {
  dish: any;
  ingred: any;
  constructor(private route: ActivatedRoute, private dishesS: DishesService, private ingredientsS: IngredientsService) {
    this.ingredientsS.getIngredients().subscribe(ingred => this.ingred = ingred);
  }
  //get params on init
  ngOnInit() { this.route.params.subscribe(params => this.getDish(params['id'])) }
  //get dish from db
  getDish(id) { this.dishesS.get(id).subscribe(dish => this.dish = dish) }
  //get ingredient from db
  getIngredient(id) { this.ingredientsS.get(id).subscribe(ingred => this.ingred = ingred) }

  addIngredient(ing_id,dish_id,form) {
    console.log(ing_id, dish_id, form);
    this.dishesS.assign(ing_id, dish_id).subscribe()
  }
}
