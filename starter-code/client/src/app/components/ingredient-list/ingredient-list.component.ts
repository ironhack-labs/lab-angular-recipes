import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList: Array<Ingredient>;

  constructor(private ingredient: IngredientService) { }

  ngOnInit() {
    this.ingredient.getIngredients()
    .subscribe((ingredients) => {
      this.ingredientList = ingredients;
    });
  }

}
