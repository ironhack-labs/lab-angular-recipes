import { DishesService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
  dish:any;
  ingredients: any;
  newIngredient: object = {};

  constructor(
    public dishesService: DishesService,
    public route:ActivatedRoute,
    public ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        let id = params.id;
        this.dishesService.getDishById(id)
          .subscribe(data => this.dish = data);
      })
    this.ingredientService.getAll().subscribe(data => this.ingredients = data)
  }

  addIngredientToRecipe(ingredientId: string, dishId: string, quantity: number){
    this.ingredientService.addIngredientToRecipe(dishId, ingredientId, quantity)
      .subscribe(() => {
        this.ngOnInit();
      })
  }

  createIngredient(){
    this.ingredientService.createIngredient(this.newIngredient)
      .subscribe(() => {
        this.newIngredient = {};
        this.ngOnInit();
      })
  }
}
