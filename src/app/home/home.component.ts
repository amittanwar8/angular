import { OnInit, Component, Input } from '@angular/core';
import { AuthenticationService } from '../_services/authenticate.service'
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule, FormGroup } from '@angular/forms';
import { error } from 'util';




@Component({

    selector: 'home-app',
    templateUrl: './home.component.html'

})

export class HomeController implements OnInit {
    mess = 'Amit';
    loginid: string;
    password: string;
    returnUrl: string;
    constructor(private _SerMethod: AuthenticationService,
        private _route: Router,
    private _router: ActivatedRoute) { }


    ngOnInit() {
        this._SerMethod.Logout();
        this.returnUrl = this._router.snapshot.queryParams['returnUrl'] || '/';

    }


    SubmitLogin() {
        debugger;
        this._SerMethod.login(this.loginid, this.password)
            .subscribe(data => {
                //alert('wrong password1');
                this._route.navigate([this.returnUrl]);
            },
                error => {
                    alert('wrong password');
                    //alert(error);
                });




        ///this.mess = this.loginid;
    }



}