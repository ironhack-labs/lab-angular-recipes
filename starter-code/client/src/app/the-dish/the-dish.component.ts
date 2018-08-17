import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../retrive-dishes/retrieve-dishes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-the-dish',
  templateUrl: './the-dish.component.html',
  styleUrls: ['./the-dish.component.css'],
  providers:[RetrieveDishesService]
})

export class TheDishComponent implements OnInit {

  dishes: any;

  constructor(
    private dish: RetrieveDishesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
  }

  getDishDetails(id) {
    this.dish.getId(id)
      .subscribe((dish) => {
        this.dishes = dish;
        console.log(this.dishes)
      });
  }
}
