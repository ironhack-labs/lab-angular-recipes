import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {
  constructor(private iService: IngredientsService) { }
  ngOnInit() {}
  data:any;
  saveIngredient(form){
    this.iService.add(form.value).subscribe()
  }
}
