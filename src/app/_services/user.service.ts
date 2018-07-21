import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import { HttpClient , HttpHeaders} from '@angular/common/http'




import {Link} from '../_model/link.model'


@Injectable()

export class UserService {
    _url: string = "http://invest.swatimfadvisor.com/api/";
    _proxy:string = "https://cors-anywhere.herokuapp.com/";
    constructor(
        private _http: HttpClient,
       

    ) { }


    Create(user: Link,innerurl:string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'                   
            })
          };
        
        return this._http.post<Link[]>(this._url + innerurl, user, httpOptions)
            .map(user => {
                return user;
            });



    }
    Retrive(innerurl:string)
    {
        return this._http.get<Link[]>(this._proxy + this._url + innerurl)
        .map(user=>{ return user});
    }
}