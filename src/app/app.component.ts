import { Component, OnInit } from '@angular/core';
//Importing the http and services
import { HttpClient } from '@angular/common/http';
import { PoliciesService } from './policies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //Initialize the serveice and client http request
  constructor(
    private policiesService:PoliciesService,
    private httpClient: HttpClient){}
  //appending json to this property
  public policies = [];

  ngOnInit(){
    //Subscibe the user detail when component initialize
    this.policiesService.getDetail()
    .subscribe(data => this.policies = data);
  }


}
