import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from './../services/ingredients.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css'],
  providers: [ DishesService, IngredientsService ]
})
export class DishesDetailsComponent implements OnInit {
  dish;
  ingredients;
  add;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {

    this.ingredientsService.getListIngredients()
     .subscribe(ingredient => {
      this.ingredients = ingredient;
     });

    this.route.params.subscribe(params =>{
      this.getDishesDetails(params['id'])
    })

  }
  getDishesDetails(id){
    this.dishesService.get(id)
      .subscribe((dish) => {
        this.dish = dish;
      });
  }

  addIngredient(id, ingredient ){
  this.dishesService.addIngredient(id, ingredient)
      .subscribe((dish)=>{
        this.add = dish;
      })
}
}
