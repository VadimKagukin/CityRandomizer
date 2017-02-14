import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

import { Сollocation } from './collocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  collocations : Сollocation[] = [];
  //adjectives : string[] = [];
  //cities : string[] = [];

  constructor(private httpService: HttpService){}

  /*generate(){
    this.httpService.addCollocation();
  }*/

  ngOnInit(){
    this.httpService.getCollocation().subscribe((data)=> {
      this.collocations = data;
      console.log("data: " + data);
      console.log(this.collocations[0]);
    })
  }
}
