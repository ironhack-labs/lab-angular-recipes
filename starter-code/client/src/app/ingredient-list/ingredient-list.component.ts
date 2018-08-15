import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients: Array<Object> = []

  constructor(
    private ingredient: IngredientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredient.getIngredients()
      .subscribe(ingredients => {
        this.ingredients = ingredients
      })
  }

  addIngredient(quantity=1, ingredient){
    let dishId;
    this.route.params.subscribe(params => dishId = params.id)
    this.ingredient.addIngredient(quantity, ingredient, dishId)
      .subscribe(dish => {
        this.router.navigate(["dish", dishId])
      })
  }

}
