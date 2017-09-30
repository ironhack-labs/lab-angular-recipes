import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DishesService } from '../services/dishes.service'
import { IngredientsService } from '../services/ingredients.service'


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe;
  ingredients;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dishesService: DishesService,
    public ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro es ${params['id']}`);
        this.getRecipesDetails(params['id'])
    });

  }
  getRecipesDetails(id) {
    this.dishesService.get(id)
    .subscribe((recipe) => {
      this.recipe = recipe
    })
    this.ingredients = this.ingredientsService.getIngredients()
  }



}
