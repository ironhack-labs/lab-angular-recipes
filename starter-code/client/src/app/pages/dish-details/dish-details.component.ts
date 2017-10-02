import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishApiService } from '../../dish-api.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  dishInfo: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private dishThang: DishApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.activatedThang.params
    .subscribe(
      // my Params = grabs URL parameter
      (myParams) => {
        // call service method and pass in parameter,
        // which is the dish ID
        this.dishThang.getDishDetails(myParams.dishId)
        // Subcribe to Ajax request
          .subscribe(
            (theDishFromApi) => {
              this.dishInfo = theDishFromApi;
            }
          );
    });
  }

}
