import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service'

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  constructor(public dishes: DishesService) { }

  ngOnInit() {
  }

}
