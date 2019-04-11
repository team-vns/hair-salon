import { Component, Injectable } from '@angular/core';
import { Router, Route } from "@angular/router";
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable() 
export class AppComponent {

  title = 'my-dream-app';
  private _opened: boolean = false;

  constructor(private router: Router, private authGuardService: AuthGuardService) { }

  ngOnInit() {
    this.printpath('', this.router.config);
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}
