import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {User} from '../../../domain/User';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;
  displayedColumns: string[] = ['id', 'nombre', 'description', 'categoria', 'precio', 'stock', 'boton'];
  datasource;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        console.log(data);
        this.users = data;
        this.datasource = new MatTableDataSource(this.users);
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  editUser(user: User): void {
    window.sessionStorage.removeItem('editUserId');
    window.sessionStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }
}
