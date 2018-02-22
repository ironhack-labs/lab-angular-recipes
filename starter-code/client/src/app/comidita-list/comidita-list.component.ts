import { Component, OnInit } from '@angular/core';
import { JalufaService } from 'services/jalufa.service';

@Component({
  selector: 'app-comidita-list',
  templateUrl: './comidita-list.component.html',
  styleUrls: ['./comidita-list.component.css']
})
export class ComiditaListComponent implements OnInit {

  jalufaList:Array<any>
  constructor(public jS: JalufaService) { 
    this.jS.getList().subscribe(lista => this.jalufaList = lista)
  }

  ngOnInit() {
  }

}
