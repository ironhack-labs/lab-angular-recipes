import { DishesService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {
  dishes: any;
  newRecipe: object = {};

  constructor(public dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getAll().subscribe(data => this.dishes = data);
  }

  createRecipe(){
    this.dishesService.createDish(this.newRecipe).subscribe(() => {
      this.newRecipe = {};
      this.ngOnInit();
    })
  }
}
