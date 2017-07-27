import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieveDishesService } from '../services/retrieve-dishes.service'
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";


@Component({
  selector: 'app-my-dishes',
  templateUrl: './my-dishes.component.html',
  styleUrls: ['./my-dishes.component.css']
})
export class MyDishesComponent implements OnInit {
  dish: <Object>;
  constructor(private route:ActivatedRoute, private retrieveDishes: RetrieveDishesService) {
    route.params
    .mergeMap( d => retrieveDishes.show(d.id) )
    .subscribe( dish => {
      this.dish=dish;
    });
  }

  ngOnInit() {
  }

}
