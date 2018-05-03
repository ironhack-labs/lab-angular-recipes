import { Ingredient } from './../../../shared/models/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../shared/services/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];

  constructor(
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.ingredientsService.list()
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

}
