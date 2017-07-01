import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-dish',
  templateUrl: './one-dish.component.html',
  styleUrls: ['./one-dish.component.css'],
  providers: [DishesService]
})
export class OneDishComponent implements OnInit {
  dish;

  constructor(
    private DishesService: DishesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getOneDish(params['id']);
    });
  }

  getOneDish(id) {
    this.DishesService.getOneDish(id)
      .subscribe((oneDish) => {
        this.dish = oneDish;
      });
  }

}
