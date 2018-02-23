import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-my-dish',
  templateUrl: './my-dish.component.html',
  styleUrls: ['./my-dish.component.css']
})
export class MyDishComponent implements OnInit {

  myDish: Object;
  dishId: any;
  
  constructor(private activatedRoute: ActivatedRoute, private dishService: DishService) { 
    this.activatedRoute.params
    .subscribe((params) => {
      this.dishId = String(params.id)
      console.log(this.dishId);
      this.dishService.getDish(this.dishId)
      .then((res: any) => {this.myDish = res})
    });
  }

  ngOnInit() {
    
  }

}
