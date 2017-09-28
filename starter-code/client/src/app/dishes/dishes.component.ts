import { DishesService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
      .subscribe(d => {
        this.dishes = d;
      })
  }

}
