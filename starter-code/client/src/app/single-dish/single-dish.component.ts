import { Component, OnInit } from '@angular/core';
import { DishList } from 'services/dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
singleDish: Object = {};
singleDId: string = "";


  constructor(public service: DishList, private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.singleDId =(params['id'])
    });
    service.getEntryById(this.singleDId).subscribe((item)  => this.singleDish = item)

  }

  ngOnInit() {
  }

}
