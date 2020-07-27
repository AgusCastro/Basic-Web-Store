import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './store/product-list/product-list.component';
import {LoginComponent} from './login/login/login.component';
import {AddUserComponent} from './admin/users/add-user/add-user.component';
import {ListUserComponent} from './admin/users/list-user/list-user.component';
import {EditUserComponent} from './admin/users/edit-user/edit-user.component';
import {RegisterUserComponent} from './login/register-user/register-user.component';
import {AdminPageComponent} from './admin/admin-page/admin-page.component';

const routes: Routes = [
  {path: 'home', component: ProductListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent},
  {path : 'admin-page', component : AdminPageComponent},
  {path : 'register', component : RegisterUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
