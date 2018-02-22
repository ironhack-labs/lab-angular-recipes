import { Component, OnInit } from '@angular/core';
import { recipService } from 'services/recip.service';

@Component({
  selector: 'app-recip',
  templateUrl: './recip.component.html',
  styleUrls: ['./recip.component.css']
})
export class RecipComponent implements OnInit {

  recipList:Array<any>;

  constructor(public re:recipService) { 
    this.re.getList().subscribe(list => this.recipList = list);
  }

  ngOnInit() {
  }

}