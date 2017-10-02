import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../models/ingredient'

import {IngredientsService} from '../../services/ingredients.service'

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {
  newIngredient: Ingredient;
  constructor( private ingredientService: IngredientsService) { }

  ngOnInit() {
  }
  addItem(name, description){
    this.newIngredient= new Ingredient({name, description})
    this.ingredientService.addNew(this.newIngredient).subscribe();

  }
}
