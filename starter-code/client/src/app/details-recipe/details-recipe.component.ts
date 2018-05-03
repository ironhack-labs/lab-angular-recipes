import { Component, OnInit } from '@angular/core';
import { DishesserverService } from '../dishesserver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.css'],
  providers: [DishesserverService]
})
export class DetailsRecipeComponent implements OnInit {

  recipeId: string;
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesserverService
  ) { }

  ngOnInit() {
    return this.route.params
    .subscribe(
      (params) => this.getRecipeDetail(params['id'])
    );
  }

  getRecipeDetail(id) {
    return this.DishesserverService.getRecipeDetail(id)
    .subscribe(
      (entry) => { this.recipe = recipe; }
    );
  }

}
