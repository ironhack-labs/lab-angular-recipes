import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../models/ingredient'

import {IngredientsService} from '../../services/ingredients.service'

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  ingredientList: Ingredient[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredientsService.getList()
    .subscribe((ingredientList)=> this.ingredientList=ingredientList);
  }

}
