import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root',})
export class AuthGuardService implements CanActivate {
  
  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();

// you would usually put this in it's own service and not access it directly!
  // this is just for the sake of the demo.
  private isLoggedIn: boolean = window.localStorage.getItem('token') != null;

  constructor(
    private router: Router
  ) {}

  hasLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Please log in')
      this.router.navigate(['']);
      return false;
    }
  }

  login(token): void {
    window.localStorage.setItem('token', token);
    this._isAuthenticatedSubject.next(true); // authenticated
  }

  logout(): void {
    window.localStorage.removeItem('token');
    this._isAuthenticatedSubject.next(false); // no more
  }
}