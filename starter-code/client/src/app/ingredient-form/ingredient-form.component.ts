import { Component, OnInit } from '@angular/core';
import { IngredientsService } from "../ingredients.service";
@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  constructor(private iS: IngredientsService) { }

  ngOnInit() {
  }

  addIngredient(form) {
    this.iS.createIngredient({ name: form.value.name }).subscribe(ingredient => {
      form.reset();
});
  }

}
