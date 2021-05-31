import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { Dish } from 'interfaces/Dish';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: Array<Dish>;
  constructor(private dishesService: DishesService, private router: Router) { }

  ngOnInit() {
    this.dishesService.getDishes()
      .subscribe(dishes => this.dishes = dishes)
  }

  showForm(){
    this.dishesService.showForm = true;
  }


  addDish(newDish){
    this.dishesService.addDish(newDish.value).subscribe(()=>{
      this.router.navigate(['/'])
    });
    this.dishesService.showForm = false;
  }

  cancelForm(){
    this.dishesService.showForm = false;
  }
}
