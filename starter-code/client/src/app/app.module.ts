import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MyServiceService } from './Service/my-service.service';
import { GetListComponent } from './getList/getList.component';
import { routes } from './Routers/my-route.routing';
import { RouterModule } from '@angular/router';
import { GetElementComponent } from './getElement/getElement.component';
import { ServiceIngredientsService } from './Service/service-ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    GetListComponent,
    GetElementComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService, ServiceIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
