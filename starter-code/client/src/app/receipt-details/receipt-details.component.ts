import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {
  receipt: any;

  constructor(
    public dishes:DishesService,
    public router:Router,
    public route:ActivatedRoute ) {
      route.params.subscribe(params => {
        this.dishes.getDishesById(params['id'])
          .subscribe(receipt => this.receipt = receipt);
      })
  }

  ngOnInit() {
  }

}
