import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor(http: HttpClient) {}

  addCustomer(){
  console.log("add customer")
  }
postDetailsFunc(){
  console.log("add customer")
}

}

