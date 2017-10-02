import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  newDish: DishInfo = {
    DishName: '',
    DishDes: '',
    phoneImage: '',
    phoneSpecs: []
  };

  @Output() newDishNotifier = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
