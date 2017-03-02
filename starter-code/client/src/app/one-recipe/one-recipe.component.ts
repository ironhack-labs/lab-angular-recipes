import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css'],
  providers: [DishesService]
})
export class OneRecipeComponent implements OnInit {
  oneRecipe : Object;
  recipeId : string;
  constructor(private dish : DishesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((recipe) => {
      this.recipeId = recipe['id']

    });
    this.dish.getEntry(this.recipeId).subscribe((dish) => {
      this.dish = dish
    });
  }
}
