import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { RetrieveIngredientsService } from '../services/retrieve-ingredients.service';
import { IngredientInfo } from '../interfaces/ingredient-info'

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  newIngredient: IngredientInfo = {
    ingredientName: '',
    ingredientQuantity: ''
  };

  @Output() newIngredientNotifier = new EventEmitter();

  constructor(
    private ingredientThang: RetrieveIngredientsService
  ) { }

  ngOnInit() {
  }

}
