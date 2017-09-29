import { IngredientsService } from './../services/ingredients.service';
import { DishesService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
  providers: [ DishesService,
    IngredientsService ]
})
export class DishComponent implements OnInit {

  dish;
  ingredients;

  constructor(
    private routes: ActivatedRoute,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.ingredientsService.getList()
    .subscribe(ingredient => {
      this.ingredients = ingredient;
    });
    this.routes.params.subscribe( params => {
      this.getDishDetails(params['id']);
    });
  }

  getDishDetails(id){
    this.dishesService.get(id)
      .subscribe(dish => this.dish = dish);
  }

}
