import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

import { Сollocation } from './collocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  collocation : string;
  collocations : string[] = [];
  count : number = 0;

  constructor(private httpService: HttpService){}

  generate() {
    this.httpService.getGenerated()
    .subscribe((data) => { 
      if (this.collocations.indexOf(data) != -1){
        this.generate();
      } else {
        if (this.collocations.length < 10){
          this.collocation = data;
          this.collocations.push(data);
          (<HTMLInputElement>document.getElementById('list-items')).value = this.collocations.join('\n');
          this.count = this.collocations.length;
        }
      }
    })
  }

}
