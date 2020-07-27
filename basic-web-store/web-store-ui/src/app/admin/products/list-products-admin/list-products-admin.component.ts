import { Component, OnInit } from '@angular/core';
import {Product} from '../../../domain/Product';
import {ItemCarrito} from '../../../domain/ItemCarrito';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../../services/product.service';
import {MatTableDataSource} from '@angular/material/table';
import {EditProductComponent} from '../edit-product/edit-product.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AddProductComponent} from '../add-product/add-product.component';

@Component({
  selector: 'app-list-products-admin',
  templateUrl: './list-products-admin.component.html',
  styleUrls: ['./list-products-admin.component.css']
})
export class ListProductsAdminComponent implements OnInit {

  products: Product[];
  carrito: ItemCarrito[];
  datasource;
    displayedColumns: string[] = ['id', 'nombre', 'description', 'categoria', 'precio', 'stock', 'boton'];
  cantidad: any;
  searchForm: FormGroup;

  constructor(private router: Router,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              public productService: ProductService,
              private formBuilder: FormBuilder) {
    this.products = [];
    this.carrito = [];

    if (!window.sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.searchForm = this.formBuilder.group({
      busqueda: ['', Validators.required]
    });
    this.actualizarTabla();
  }

  comprar(): void{

  }


  notificar(texto, color): void{
    let panelClass;
    if (color === 'verde' ){
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


  modificarProducto(product): void{
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: {product},
       width: '70%'
    });
    dialogRef.afterClosed().subscribe(data => {
      this.actualizarTabla();
      console.log('The dialog was closed');
      if (!data){
        this.notificar('No se realizó ninguna modificacion.', 'rojo');
      }else if (data.resultado !== 'ERROR'){
        this.notificar('Modificacion completada.', 'verde');
        this.carrito = [];
      }else{
        this.notificar('No se realizó ninguna modificacion.\nERROR: ' + data.error, 'rojo');
      }
    });
  }

  ngOnInit(): void {
  }

  buscar(): void {
    if (this.searchForm.value.busqueda !== ''){
      this.productService.getProductosByCategory(this.searchForm.value.busqueda).subscribe( data => {
        this.products = data as Product[];
        console.log(this.products);
        this.datasource = new MatTableDataSource(this.products);
      });
    }else{
      this.actualizarTabla();
    }
  }

  private actualizarTabla(): void {
    this.searchForm.value.busqueda = '';
    this.productService.getProductos().subscribe( data => {
      this.products = data as Product[];
      console.log(this.products);
      this.datasource = new MatTableDataSource(this.products);
    });
  }

  addProduct(): void{
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: {},
      width: '70%'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarTabla();
      console.log('The dialog was closed');
      if (!result){
        this.notificar('No se realizó ninguna modificacion.', 'rojo');
      }else if (result.resultado !== 'ERROR'){
        this.notificar('Modificacion completada.', 'verde');
        this.carrito = [];
      }else{
        this.notificar('No se realizó ninguna modificacion.\nERROR: ' + result.error, 'rojo');
      }
    });
  }
}
