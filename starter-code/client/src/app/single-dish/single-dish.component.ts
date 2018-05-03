import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import { DishesServiceService } from '../services/dishes-service.service';
import { IngredientsServiceService } from '../services/ingredients-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish: any;
  ingredient: string;
  ingredients: Array<object>;
  qty: string;

  constructor(route: ActivatedRoute,
    public router: Router,
    private DishService: DishesServiceService,
    private IngredientsService: IngredientsServiceService) { 
      this.refreshIngredients();
      route.params.subscribe(params => {
        DishService.getDish(params.id).subscribe(dish => {
          this.dish = dish;
        });
      });
    }

 
  ngOnInit() {}
  refreshIngredients() {
    this.IngredientsService.getIngredients().subscribe(ingredients => (this.ingredients = ingredients));
  }
  addIngredient(id,idI,qty){
    console.log (id,idI,qty);
    this.IngredientsService.addIngredients(id, idI, qty).subscribe(data => {})
  }
}
