import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  ingredientsList: object={};

  constructor( public ingredSer: IngredientsService) {
    this.ingredSer.getList().subscribe( list => this.ingredientsList = list);
   }

  ngOnInit() {
  }

  addIngredient(id, quantity) {

  }

}
