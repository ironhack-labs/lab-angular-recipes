import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredients-list-page',
  templateUrl: './ingredients-list-page.component.html',
  styleUrls: ['./ingredients-list-page.component.css']
})
export class IngredientsListPageComponent implements OnInit {

  ingredients: Array<Object>;

  constructor(private ingredientsService: IngredientsService) {
    console.log('constructor!')
    this.ingredientsService.retrieveAll()
      .then(ingredients => this.ingredients = ingredients);
  }

  ngOnInit() {
    console.log('init!')
  };

}
