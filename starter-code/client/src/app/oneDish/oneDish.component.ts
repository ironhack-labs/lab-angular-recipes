import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { Dish } from 'interfaces/Dish';

@Component({
  selector: 'app-oneDish',
  templateUrl: './oneDish.component.html',
  styleUrls: ['./oneDish.component.css']
})
export class OneDishComponent implements OnInit {
  dish: Dish;
  id: string;

  constructor(private dishesService: DishesService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => this.id = params['id'])

    this.dishesService.getDish(this.id)
      .subscribe(dish => this.dish = dish)
  }

}
