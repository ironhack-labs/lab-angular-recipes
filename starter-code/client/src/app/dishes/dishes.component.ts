import { Component, OnInit } from '@angular/core';
import { DishesService } from 'app/dishes.service';

interface IDish{
  name:string;
  image:string;
  description:string;
}

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes:Array<IDish>
  constructor(private dishesService:DishesService) { }

  ngOnInit() {
    this.dishesService.getAllDishes().then((dishes: Array<IDish>)=>{
      this.dishes = dishes
    })
  }

}
