import { Component, OnInit, Input } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  dishId: String;
  dish: any;
  ingredients: Array<any>;

  constructor(private dishesService: DishesService, private ingredientsService: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.dishId = params['id'];
      console.log(this.dishId);
      this.dishesService.getDish(this.dishId)
        .then((res) => {
          this.dish = res;
          console.log(this.dish);
      // this.ingredientsService.getIngredients(this.dishId)
        });

      });
      
    this.ingredientsService.getIngredients()
      .then((res) => {
        this.ingredients = res;
        console.log(this.ingredients);
      });
      
  // closing ngOnInit
  }
// closing the export
}
