import { Component, OnInit } from '@angular/core';
import { DishesService } from  '../../services/dishes.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor( private dishesService : DishesService ) { }

  dishesEntries: Array<any>;

  ngOnInit() {

    this.dishesService.getAllDishes()
      .then((data: Array<any>) => this.dishesEntries = data);
  }
}

