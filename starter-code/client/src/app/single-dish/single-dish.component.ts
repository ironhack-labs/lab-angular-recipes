import { Component, OnInit } from '@angular/core';
import {DishesService} from '../../services/dishes.service';
import {IngredientsService} from '../../services/ingredients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  singleDish: Object;
  ingredients: Array<any>;
  newIng: Object = {};

  constructor(
    public router:Router,
    public dishesService:DishesService,
    public ingredientsService:IngredientsService,
    public route:ActivatedRoute) {}

  ngOnInit() {
    this.getIngredientList();
    this.getSingleDish();
  }

  getSingleDish() {
    this.route.params.subscribe(params => {
      this.dishesService.getSingleDish(params['id'])
        .subscribe(dish => {this.singleDish = dish;});
    })
  }

  getIngredientList() {
    this.ingredientsService.getAllIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }

  addIngredient(dishId, ingId) {
    this.ingredientsService.addNewIngredient(this.newIng, dishId, ingId).subscribe(() => {
      this.getSingleDish();
    });
    this.newIng = {};
  }


}
