import { Component, OnInit } from '@angular/core';
import {DishesService} from '../dishes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css']
})
export class DishesDetailsComponent implements OnInit {
  dishes;
  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public dishesservice: DishesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['id']}`);
      this.getDishesDetails(params['id'])
    });
  }

  getDishesDetails(id){
    this.dishesservice.get(id).subscribe((dishes) => {
      this.dishes = dishes
    })
  }

}
