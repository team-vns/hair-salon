import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'test';
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
}