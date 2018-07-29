import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service'

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes: Array<any>;

  constructor(public DishesService:DishesService) { }

  ngOnInit() {
    this.DishesService.getAllDishes().subscribe(data => this.dishes = data);
  }
}

