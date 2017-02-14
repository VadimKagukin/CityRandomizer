import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import { Сollocation } from './collocation';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }

    getCollocation(){
      return this.http.get('https://gp-js-test.herokuapp.com/api')
        .map((resp:Response)=>{
          let collocationsList = resp.json();
          let collocations :Сollocation[] = [];
          for(let index in collocationsList){
            console.log(collocationsList[index]);
            let col = collocationsList[index];
            collocations.push({adjectives: col.adjectives, city: col.city});
          }
          return collocations;

                /*this.collocations = resp.json();
                this.adjectives = resp.json().adjectives;
                this.cities = resp.json().cities;
                (<HTMLInputElement>document.getElementById('myTextArea')).value = this.collocations.join('\n');
                */
        })
    }

    /*addCollocation(){
      let rand = Math.floor(Math.random() * 4);
      console.log(rand);
      
    }*/
}