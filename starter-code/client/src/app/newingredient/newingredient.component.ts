import { Component, OnInit } from '@angular/core';
import { ingredientsService } from 'service/ingredients.service';

@Component({
  selector: 'app-newingredient',
  templateUrl: './newingredient.component.html',
  styleUrls: ['./newingredient.component.css']
})
export class NewingredientComponent implements OnInit {

  constructor(public ingredientService: ingredientsService) { }

  ngOnInit() {
  }

  newIngredient(myForm) {
    console.log(myForm.value.name)
    this.ingredientService.newIngredient({ name: myForm.value.name }).subscribe();
  }
}
