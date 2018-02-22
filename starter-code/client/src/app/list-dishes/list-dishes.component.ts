import { Component, OnInit } from '@angular/core';
import { DisplayDishes } from 'services/displaydishes.service';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {

  dishesList:Array<any>;
  constructor(public pS:DisplayDishes) { 
    this.pS.getList().subscribe(list => 
      this.dishesList = list);
  
  }

  ngOnInit() {
  }
}
