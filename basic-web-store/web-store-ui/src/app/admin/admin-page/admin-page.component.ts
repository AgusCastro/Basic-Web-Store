import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  seleccion = '';
  constructor(private router: Router,
              private apiService: ApiService) {
    if (!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.currentUser().subscribe(
      data => {
        if (data.role !== 'ADMIN'){
          this.router.navigate(['login']);
        }
      }
    );
  }

  ngOnInit(): void {
  }

  verProductos(): void {
    this.seleccion = 'productos';
  }
  verUsuarios(): void {
    this.seleccion = 'usuarios';
  }
}
