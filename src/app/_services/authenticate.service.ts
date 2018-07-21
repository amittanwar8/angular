import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import { jsonpCallbackContext } from '@angular/common/http/src/module';


@Injectable()

export class AuthenticationService {
    url: string = "http://invest.swatimfadvisor.com/api/";
     proxyurl:string = "https://cors-anywhere.herokuapp.com/";
    constructor(private _http: HttpClient) { }

    login(userid: string, userpass: string) {

        return this._http.post<any>(this.proxyurl+this.url + "Login/Authentication", { user_id: userid, Passowrd: userpass })
            .map(user => {
                if (user && user[0].Login_id) {
                    localStorage.setItem('CurrentUser', JSON.stringify(user[0].Login_id));
                }
                return user;

            })

    }

    Logout()
    {
        localStorage.removeItem('CurrentUser');
    }


}