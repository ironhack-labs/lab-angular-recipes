import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../services/dishes-list.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: any[] = [];

  constructor(
    private dishesService: DishesListService
  ) { }

  ngOnInit() {
    this.dishesService.getAllDishes()
      .subscribe(
        (list: any[]) => {
          console.log(list);
          this.dishes = list;
        }
      )
  }

}
