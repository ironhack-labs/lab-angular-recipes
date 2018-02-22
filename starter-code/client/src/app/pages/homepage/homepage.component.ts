import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  recipies: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getList()
      .then(recipies => this.recipies = recipies);
  }
}
