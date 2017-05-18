import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../dishes.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})

export class DishesComponent implements OnInit {

  items;

  constructor(private listService : EntryListService) { }

  ngOnInit() {
  }

  listTest(){
  console.log("funciona");
}

  listAll(){
  this.listService.getList().subscribe(response =>{
    this.items = response;
    console.log(response)
  })



}
}
