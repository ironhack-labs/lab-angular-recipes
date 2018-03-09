import { Component, OnInit} from '@angular/core';
import { DishesService} from '../services/dishes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})

export class NewDishComponent implements OnInit {

  name = '';
  description = '';
  image = '';
  newOb = {};
  constructor(private dish: DishesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  };

  addEntry() {
      this.newOb = {
        name: this.name,
        description: this.description,
        image: this.image
      };
      this.dish.createEntry(this.newOb).subscribe(res => this.router.navigate(['']));
  }
}
