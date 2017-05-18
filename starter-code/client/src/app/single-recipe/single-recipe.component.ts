import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service'
import { IngredientsService } from '../ingredients.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css'],
  providers: [DishesService, IngredientsService]
})
export class SingleRecipeComponent implements OnInit {
  dish: any;
  ingredients;
  constructor(private route: ActivatedRoute,
  private dishService: DishesService,
  private ingredient: IngredientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
  });
    this.ingredient.getIngredients()
    .subscribe((ingredients) => {
      this.ingredients = ingredients;
      console.log(ingredients)
    })
}

getDishDetails(id){
  this.dishService.getSingleDish(id).subscribe((dish)=>{
    this.dish = dish;
  })
}

}
