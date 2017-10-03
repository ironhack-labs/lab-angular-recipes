import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { DishRetrieveService } from '../../services/dish-retrieve.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RetrieveIngredientsService } from '../../services/retrieve-ingredients.service'
import { IngredientInfo } from '../../interfaces/ingredient-info'

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  ingredients: any[] = [];

  recipeInfo: any = {};

  isFormOn: boolean;

  newIngredient: IngredientInfo = {
    ingredientName: '',
    ingredientQuantity: ''
  };

  @Output() newIngredientNotifier = new EventEmitter();

  constructor(
    private recipeThang: DishRetrieveService,
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private ingredientThang: RetrieveIngredientsService
  ) { }

  ngOnInit() {
      this.activatedThang.params
      .subscribe(
        (myParams) => {
          this.recipeThang.getRecipeDetails(myParams.dishId)
            .subscribe(
              (recipesFromApi) => {
                this.recipeInfo = recipesFromApi;
              }
            );
        });
  }//CLOSE ngOnInit

  showForm() {
    if(this.isFormOn){
      this.isFormOn = false;
    }
    else{
      this.isFormOn = true;
    }

  }//CLOSE showForm()

  handleNewIngredient(theIngredient) {
    this.ingredients.unshift(theIngredient);
    this.isFormOn = false;
  }

}
