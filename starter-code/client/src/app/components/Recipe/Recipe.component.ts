import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/Recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Recipe',
  templateUrl: './Recipe.component.html',
  styleUrls: ['./Recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Object = {};
  id: string;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
      .subscribe(params=>this.id = params['id'])
    this.recipeService.getRecipesById(this.id)
      .subscribe(recipe=>this.recipe=recipe)
  }

}
