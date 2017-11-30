import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  dishes: Array<any> = [];
  constructor(public dishesList:DishesService) {
    this.dishesList.getDishesList().subscribe( list => {
      this.dishes = list;
    });
  }

  ngOnInit() {
  }

}
