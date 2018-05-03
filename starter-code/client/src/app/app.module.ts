import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListAllComponent } from './list-all/list-all.component';

import { MyServiceService } from './services/my-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

