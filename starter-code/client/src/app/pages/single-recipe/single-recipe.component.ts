import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  singleRecipe: object;
  recipiId: string;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => this.recipiId = params['id']);

    this.dataService.getSingle(this.recipiId)
      .then(singleRecipe => this.singleRecipe = singleRecipe);
  }

}
