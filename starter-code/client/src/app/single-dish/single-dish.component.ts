import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish:Object;
  constructor(private route:ActivatedRoute, private dshServ:DishesService) {
    route.params
    .mergeMap( (d:any) => dshServ.get(d.id))
    .subscribe( dish => {
      this.dish=dish;
    });
   }

  ngOnInit() {
  }

}
