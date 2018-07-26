import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: any;
  recipeId: string;

  constructor(
    private route: ActivatedRoute,
    public recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.recipeId = params.id});
    this.recipeService.getRecipe(this.recipeId).subscribe((recipe) => {this.recipe = recipe})
  }
}

