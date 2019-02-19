import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable ()

export class AuthGuard implements CanActivate, CanActivateChild{

constructor(private authService: AuthService, private router: Router){}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable <boolean>  | Promise<boolean> |  boolean  {
    return this.authService.isAutenticated().then((autenticated: boolean)=>{
        if(autenticated){
            return true
        }else{
            this.router.navigate(['/']);
        }
    })
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable <boolean>  | Promise<boolean> |  boolean  {
        return this.canActivate(route, state);
        
    }


}


// :  Observable <boolean>   | Promise<boolean> |  boolean