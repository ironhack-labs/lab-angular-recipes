import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishesService } from 'app/services/dishes.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  recipe: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });
  }
  getEntryDetails(id) {
    this.dishesService.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }


}
