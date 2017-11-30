import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  receipts: Array<any> = [];
  constructor(public receiptList:DishesService) {
    this.receiptList.getDishesList().subscribe( list => {
      this.receipts = list;
    });
  }

  ngOnInit() {
  }

}
