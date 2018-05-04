import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {DishesService} from '../dishes.service';
import { Observable } from 'rxjs/Observable';
import {IngredientsService} from '../ingredients.service';


@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css'],
  providers: [DishesService, IngredientsService]
})

export class SingleDishComponent implements OnInit {
  dish: any;
  ingredients: Array <any> = [];

  constructor(private route: ActivatedRoute, private susanaService: DishesService, private ingredientService: IngredientsService) {}

   

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.susanaService.get(params.id).subscribe(dish => {
        this.dish = dish;
      })
    })

    this.susanaService.getIngredient().subscribe(ingredients => this.ingredients=ingredients)
  };
  
       addIngredient(dishId, ingId, quantity){
         this.susanaService.addIngredient(dishId, ingId, quantity.value).subscribe( ing => {
           quantity.value,
          dishId,
        ingId
      })
    }
  }

    


    
  


