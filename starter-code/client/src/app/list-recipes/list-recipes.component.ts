import { Component, OnInit } from '@angular/core';
import { GetDishesService } from '../services/get-dishes.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  dishes: Array<any>

  constructor(
    private dishesService: GetDishesService,
  ) { }

  ngOnInit() {
    this.dishesService.getAllRecipies()
    .subscribe(dish=>{
      this.dishes = dish
      console.log(dish)
    })
  }

}
