import { Component, OnInit } from '@angular/core';
import { AllDishesService } from '../services/AllDishes.service'
import { Dish } from '../Dish-interface';


@Component({
  selector: 'app-listAllDishes',
  templateUrl: './listAllDishes.component.html',
  styleUrls: ['./listAllDishes.component.css'],
  providers: [AllDishesService],

})
export class ListAllDishesComponent implements OnInit {
  dishes: Array<Dish>

  constructor( private dishesService : AllDishesService) { }

  ngOnInit() {
    this.getAllEntries();
  }

  getAllEntries(){
    this.dishesService.getDishes()
    .subscribe((data) => this.dishes = data)
  }

}
