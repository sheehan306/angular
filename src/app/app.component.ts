import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

postDetailsFunc(){
console.log('hi');
}

addCustomer(){
console.log('hi add');
}

  title = 'app';
}

