import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../service/dishes.service';
import { IngredientService } from '../../service/ingredient.service';


import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-details-dish',
  templateUrl: './details-dish.component.html',
  styleUrls: ['./details-dish.component.css']
})
export class DetailsDishComponent implements OnInit {

  dish:any;
  ingredients:Array<any> = [];

  constructor(public route:ActivatedRoute, public dishesSer: DishesService, public ingredientService: IngredientService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getDetail(params['id'])
    })
    this.ingredientService.getIngredientsList().subscribe(ingredient=>{
      this.ingredients = ingredient
    })
  }

  getDetail(id){
    this.dishesSer.getDishByID(id)
      .subscribe((e) => {
        this.dish = e
    })
  }

}
