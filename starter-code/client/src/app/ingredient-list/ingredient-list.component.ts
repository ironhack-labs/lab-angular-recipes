import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'services/ingredients.service';

interface ingredient {
  name: String,
  image: String,
  description: String
}

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientList
  constructor(private IngredientsService: IngredientsService) { }

  ngOnInit() {
    this.IngredientsService.getIngredients().subscribe( res => {
      this.ingredientList = res
    })
  }
  
  addIngredient(ingredientId, quantity){
    let recipeId = window.location.pathname.split('/')[2];
    this.IngredientsService.addIngredient(recipeId, ingredientId, quantity).subscribe( res => console.log('Added'))
  }

}
