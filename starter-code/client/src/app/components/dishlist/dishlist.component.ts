import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish.service';


@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.css']
})
export class DishlistComponent implements OnInit {
  dishes: Array<object>=[]
  constructor(public dS:DishService) { }

  ngOnInit() {
    this.dS.getDishes().subscribe(dishes=>{
      this.dishes = dishes
    })
  }

}
