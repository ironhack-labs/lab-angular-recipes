import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  recipe: Dish = {
    name: '',
    description: '',
    image: '',
    ingredients: []
  };

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipeInfo(params['id']);
    });
  }

  getRecipeInfo(id) {
    this.recipeService.get(id)
    .subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
