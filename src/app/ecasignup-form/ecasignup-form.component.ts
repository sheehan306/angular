import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ecasignup-form',
  templateUrl: './ecasignup-form.component.html',
  styleUrls: ['./ecasignup-form.component.css']
})
export class ECASignupFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postDetailsFunc(){
  console.log('hi');
  }

  addCustomer(){
  console.log('hi add');
  }


}
