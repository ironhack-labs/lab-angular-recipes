import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
dishDetails:any;

  constructor(public router:Router,
    public dish:DishesService,
    public route:ActivatedRoute)) {
      route.params.subscribe(params => {
        this.dish.getDishByID(params['id'])
          .subscribe(entrada => this.singleEntry = entrada); }

  ngOnInit() {
  }

}
