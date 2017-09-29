import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service'
@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes;
  constructor(private displayService:DisplayService) { }

  ngOnInit() {
    this.displayService.getList()
        .subscribe((dishes)=>{
          this.dishes = dishes
        })
  }

}
