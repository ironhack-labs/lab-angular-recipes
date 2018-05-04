import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import 'rxjs';
import { Dish } from '../list-interface';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {
  dishes:Array<Dish>=[];
  
  constructor(
    private router: Router,
    private DishesService: DishesService
  ) { }

  ngOnInit() {
     this.DishesService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
  })
 
  }
}
