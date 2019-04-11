import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {HomeComponent} from "./home/home.component";
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: window.localStorage.getItem('token') ? HomeComponent : LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent , canActivate: [AuthGuardService]},
  { path: 'list-user', component: ListUserComponent, canActivate: [AuthGuardService]},
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuardService]},
  { path: 'home', component : HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
