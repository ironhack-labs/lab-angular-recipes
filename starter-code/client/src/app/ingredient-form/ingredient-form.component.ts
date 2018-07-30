import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'services/ingredients.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  constructor(public ingredientService : IngredientService) { }

  ngOnInit() {
  }
  createIngredient(name, description, image){
    const ingredient = {name, description, image}
    this.ingredientService.createIngredient(ingredient).subscribe()
  }
}
