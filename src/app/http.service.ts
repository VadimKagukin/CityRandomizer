import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import { Сollocation } from './collocation';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getGenerated(){
    return this.http.get('https://gp-js-test.herokuapp.com/api')
      .map((resp:Response)=>{
        let collocationsList = resp.json();

        let rand = Math.floor(Math.random() * 4);
        let collocationString : string = collocationsList.adjectives[rand] + " " + collocationsList.cities[rand];
        collocationString = collocationString.charAt(0).toUpperCase() + collocationString.substr(1);

        return collocationString;
      })
  }
}