import { Component, OnInit } from '@angular/core';
import { DishesServices } from '../services/Dishes.services';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../services/Ingredients.services';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css'],
  providers: [IngredientsService]
})
export class OneRecipeComponent implements OnInit {
  iList: Array<any>;
  recipe: any;
  nIng: number = 0;
  constructor(
    public dS: DishesServices,
    public iS: IngredientsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipeDetails(params['id']);
      this.iS.getList().subscribe(list => this.iList = list);
    })
  }

  getRecipeDetails(id) {
    this.dS.getOne(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      })
  }

  addIng(ing) {
    this.iS.addIngredient(ing, this.recipe._id)
    .subscribe((a)=> {
      this.nIng = a.length;
    })
  }


}
