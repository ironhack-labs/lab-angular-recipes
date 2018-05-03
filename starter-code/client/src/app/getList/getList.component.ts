import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "../Service/my-service.service";

@Component({
  selector: "app-getList",
  templateUrl: "./getList.component.html",
  styleUrls: ["./getList.component.css"]
})
export class GetListComponent implements OnInit {

  lists: Array<Object> = [];

  constructor(private myServiceService: MyServiceService) {}

  ngOnInit() {
    // this.myServiceService.getList().subscribe(list => this.lists = list)
    this.myServiceService.getList().subscribe(list => {
      list.forEach(e => {
        if (!/(jpg|png|jpeg)$/g.test(e.image))
          e.image = "https://www.spreadshirt.com/image-server/v1/mp/designs/1008669354,width=178,height=178/squidward-pepe.png";
        this.lists.push(e);
      });
    })
  }

}
