import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes:Array<object>=[]
  constructor(public dS:DishesService) { }

  ngOnInit() {
    this.dS.getDishes().subscribe(dishes=>{
      this.dishes=dishes
    })
  }

}
