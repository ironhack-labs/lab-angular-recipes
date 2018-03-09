import { Component, OnInit} from '@angular/core';
import { IngredientsService} from '../services/ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {

  name = '';
  newOb = {};
  constructor(private dish: IngredientsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  };

  addEntry() {
      this.newOb = {
        name: this.name,
      };
      this.dish.createEntry(this.newOb).subscribe(res => this.router.navigate(['']));
  }
}
