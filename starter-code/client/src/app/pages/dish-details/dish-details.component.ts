import { Component, OnInit } from '@angular/core';
import {ListDishesService} from '../../services/list-dishes.service';
import { ActivatedRoute } from '@angular/router';
import {ListIngredientsService} from '../../services/list-ingredients.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  recipe:Object;
  recipeId:string;
  ingredients:Array<Object>;

  constructor(private dishService: ListDishesService, private listIngredientService: ListIngredientsService , private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.recipeId = params['id']);

    this.dishService.getSingleDish(this.recipeId)
    .then((result) => this.recipe =result);

    this.listIngredientService.getIngredients()
    .then(result => this.ingredients = result);

  }

}
