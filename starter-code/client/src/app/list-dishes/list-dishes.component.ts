import { Component, OnInit } from '@angular/core';
import { DishesServices } from '../services/Dishes.services';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {

  dList:Array<any>
  constructor(
    public dS: DishesServices
  ) {
    this.dS.getList().subscribe( list => this.dList = list );
   }

  ngOnInit() {
  }

}
