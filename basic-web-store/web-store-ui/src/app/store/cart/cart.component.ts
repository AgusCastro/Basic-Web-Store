import {Component, OnInit} from '@angular/core';
import {ItemCarrito} from '../../domain/ItemCarrito';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TransaccionService} from '../../services/transaccion.service';
import {User} from '../../domain/User';
import {Product} from '../../domain/Product';

export interface DialogData {
  error: any;
  carrito: ItemCarrito[];
  resultado: string;
  product: Product;
  user: User;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'unitario', 'cantidad', 'subtotal', 'boton'];

  carrito: ItemCarrito[];
  dataSource;

  constructor(public dialogRef: MatDialogRef<CartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public transaccionService: TransaccionService) {
    console.log(this.carrito);
    this.carrito = this.data.carrito;
    this.dataSource = new MatTableDataSource(this.carrito);
    console.log(this.dataSource);
  }

  ngOnInit(): void {
  }

  finalizaCompra(): void{
    this.transaccionService.realizarTransaccion(this.carrito).subscribe( response => {
        console.log(response);
        if (response === true){
          this.data.resultado = 'COMPRA';
          this.data.carrito = this.carrito;
          this.dialogRef.close();
        }else{
          this.cerrar();
        }
      },
      error => {
        console.log(error);
        this.cerrar();
      });
  }

  eliminar(element: any): void {
    console.log(this.dataSource);
    // this.dataSource.data = this.dataSource.data.filter(x => x != element);
    const index = this.dataSource.data.indexOf(element);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  cerrar(): void {
    this.data.resultado = 'CANCELADO';
    this.data.carrito = this.carrito;
    this.dialogRef.close();
  }

  getCostoTotal(): number {
    return this.carrito.map(t => t.montoTotal).reduce((acc, value) => acc + value, 0);
  }
}
