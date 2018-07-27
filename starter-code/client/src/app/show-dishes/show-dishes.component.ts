import { Component, OnInit } from '@angular/core';
import { getDishService } from 'services/getDish.service';


@Component({
  selector: 'app-show-dishes',
  templateUrl: './show-dishes.component.html',
  styleUrls: ['./show-dishes.component.css'],
  providers: [getDishService]
})
export class ShowDishesComponent implements OnInit {

  dishList: Array<object>
  constructor(public dS: getDishService) { }

  ngOnInit() {
    this.dS.getDishes().subscribe(list=>{
      this.dishList=list;
    })
  }

  submitForm(form){
    this.dS.createDish({
      name: form.value.name,
      image: form.value.image,
      description: form.value.description
    }).subscribe(()=>{
      this.dS.getDishes().subscribe(list=>{
        this.dishList=list;
      })
      form.reset()
    })
  }

  submitForm1(form1){
    this.dS.createIngre({
      name: form1.value.name
    }).subscribe(()=>{
      form1.reset()
    })
  }

}
