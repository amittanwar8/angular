import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router'

@Injectable()

export class AuthCheck implements CanActivate
{
    constructor(
        private _route:Router

    ){} 

    canActivate(_route:ActivatedRouteSnapshot , state:RouterStateSnapshot)
    {
        debugger
        if(localStorage.getItem('CurrentUser'))
        {
            return true;
        }
        this._route.navigate(['/home'],{queryParams: { returnUrl: state.url }})
        return false;
    }
}