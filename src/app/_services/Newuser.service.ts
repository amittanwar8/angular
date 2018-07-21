import { Injectable  } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router'; // for navigate to another view
import { Link } from '../_model/link.model';


@Injectable()



export class NewUserService {
    _url: string = "http://invest.swatimfadvisor.com/api/";
    _proxy:string = "https://cors-anywhere.herokuapp.com/";
    constructor(private http: Http) {
    
    }

    Create(user: Link,innerurl:string){

        var headers = new Headers();
      headers.append('Content-Type', 'application/json');      
     return this.http.post(this._proxy +this._url+innerurl, user, { headers: headers })
        
    
    }
}