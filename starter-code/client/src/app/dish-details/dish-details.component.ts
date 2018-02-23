import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  dish:any;
  constructor(
    public pS: DishesService,     
    private router: Router,
    private route: ActivatedRoute,) { 

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
}
  getDishDetails(id) {
    this.pS.get(id)
      .subscribe((dish) => {
        this.dish = dish;
      });
  }
}
