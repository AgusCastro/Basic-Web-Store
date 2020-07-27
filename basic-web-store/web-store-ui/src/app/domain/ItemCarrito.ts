import {Product} from "./Product";

export class ItemCarrito{
  id: number;
  producto :Product;
  cantidad : number;
  montoTotal : number;


  constructor(id: number, producto: Product, cantidad: number, montoTotal: number) {
    this.id = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.montoTotal = montoTotal;
  }

}
