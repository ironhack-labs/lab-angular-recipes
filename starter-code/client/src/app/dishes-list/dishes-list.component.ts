import { Component, OnInit } from '@angular/core'
import { DishesService } from '../services/dishes.service'

interface Dish{
  _id: string
  name: string
  image: string
  description: string
  __v: number
  ingredients: Array<string>
}

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes: Array<Dish>
  constructor(private dishesService: DishesService) {}

  ngOnInit() {
    this.dishesService.getDishes()
      .subscribe(dishes => this.dishes = dishes)
  }

}
