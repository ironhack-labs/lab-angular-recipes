import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientsList;

  constructor(public ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredientsList = this.ingredientsService.getList();
  }
}
