import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from '../dishes-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-dishes',
  templateUrl: './my-dishes.component.html',
  styleUrls: ['./my-dishes.component.css']
})
export class MyDishesComponent implements OnInit {
  dishes: Array<object>;
  constructor(
    public dishesService: DishesServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dishesService.getDishes().subscribe(dishes => (this.dishes = dishes));
  }
}
