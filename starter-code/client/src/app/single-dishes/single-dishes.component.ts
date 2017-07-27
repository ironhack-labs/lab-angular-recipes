import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../service/recipes.service';
import { IngredientsService } from '../../service/ingredients.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-dishes',
  templateUrl: './single-dishes.component.html',
  styleUrls: ['./single-dishes.component.css']
})
export class SingleDishesComponent implements OnInit {

  dishes:Object;
  ingredientsList:Observable<Array<Object>>;
  dishId:string;
  
  constructor(private route:ActivatedRoute, private sD: RecipesService) {
    route.params
    .mergeMap( (d: any) => sD.get(d.id) )
    .subscribe( dishes => {
      console.log(dishes);
      this.dishes=dishes;
})
};
  ngOnInit() {
  }

}
