import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';


@Injectable({
  providedIn: 'root'
})
export class Guarda1Guard implements CanActivate, CanDeactivate<unknown> {

  constructor(private router: Router,
              private servicioClientes: ClienteService){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.servicioClientes.getLogin()==0){
      alert("¡Alto!¡La Guardia Sivil!");
      this.router.navigate(["/"]);
      return false;
    }
    else{
      return true;
    }

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
