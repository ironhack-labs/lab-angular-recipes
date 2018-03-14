import { DishService } from './../../../shared/services/dish.service';
import { Dish } from './../../../shared/models/dish.model';
import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes:Array<Dish>=[];

  constructor(
    private dishService:DishService,
    private router:Router
  ) { }

  ngOnInit() {
    this.dishService.list()
    .subscribe(dishes=>this.dishes=dishes);
  }

  showDishDetails(id:string){
    this.router.navigate(['/dishes', id]);
  }
}
