import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { IngredientsService } from '../services/ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish;
  ingredients;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipesFoodService: RecipesService,
    private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetail(params['id'])
    })

    this.ingredientsService.getList().subscribe(result => this.ingredients = result)
  }

  getDishDetail(id) {
    this.recipesFoodService.get(id)
      .subscribe((dish) => {
        this.dish = dish
      })
  }
}
