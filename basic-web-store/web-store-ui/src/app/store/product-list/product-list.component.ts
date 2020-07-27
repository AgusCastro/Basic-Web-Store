import { Component, OnInit } from '@angular/core';
import {ItemCarrito} from '../../domain/ItemCarrito';
import {Product} from '../../domain/Product';
import {MatDialog} from '@angular/material/dialog';
import {CartComponent} from '../cart/cart.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  carrito: ItemCarrito[];
  datasource;
  esAdmin: boolean;

  displayedColumns: string[] = ['nombre', 'description', 'categoria', 'precio', 'stock', 'cantidad', 'boton'];
  cantidad: any;

  constructor(private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              public productService: ProductService,
              private apiService: ApiService) {
    this.products = [];
    this.carrito = [];

    if (!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.currentUser().subscribe(
      data => {
          this.esAdmin = (data.role === 'ADMIN');
      }
    );
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.productService.getProductos().subscribe( data => {
      this.products = data as Product[];
      this.datasource = new MatTableDataSource(this.products);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  comprar(){
      const dialogRef = this.dialog.open(CartComponent, {
        data: {carrito: this.carrito}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.carrito = result.carrito;
        console.log('The dialog was closed');
        if (result.operacion !== 'CANCELADO'){
          this.notificar('Elementos del carrito comprados.', 'verde');
          this.carrito = [];
          this.cargarProductos();
        }else{
          this.notificar('No se compraron los items.', 'rojo');
        }
      });
    }


  notificar(texto, color): void{
    let panelClass;
    if (color === 'verde'){
      panelClass = 'style-succes';
    }else{
      panelClass = 'red-snackbar';
    }

    this.snackBar.open(texto, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [panelClass]
    });
  }


  agregarProducto(itemCarro) {
    console.log('itemCarro' + JSON.stringify(itemCarro));
    if (itemCarro.cantidad){
      const aux: ItemCarrito = new ItemCarrito(null, null, null, null);
      aux.producto = itemCarro;
      aux.cantidad = itemCarro.cantidad;
      aux.montoTotal = itemCarro.price * itemCarro.cantidad;
      this.carrito.push(aux);
    }else{
      this.notificar('Ingrese cantidad', 'rojo');
    }
  }

  ngOnInit(): void {
  }

  checkProductoInCart(produc){

    let valor = false;
    this.carrito.forEach(element => {
      if (element.producto.name === produc.name){
        valor = true;
      }
    });
    return valor;
  }

  getNumbers(stock) {
    let array: string[];
    array = [];
    for (let i = 1; i <= stock; i++) {
      array.push(i.toString());
    }
    return array;
  }

  goAdmin() {
    this.router.navigate(['admin-page']);
  }
}
