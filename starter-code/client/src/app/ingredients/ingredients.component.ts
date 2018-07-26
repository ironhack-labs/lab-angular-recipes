import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'services/ingredients.service';
import { Ingredient } from 'interfaces/Ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  
  ingredients: Array<Ingredient>
  constructor(private ingredientService: IngredientsService) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients=ingredients)
  }

}
