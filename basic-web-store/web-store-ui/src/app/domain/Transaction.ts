import {Product} from "./Product";
import {User} from "./User";

export class Transaction{
  usuario : User;
  productos :Product[];
  montoTotal : number;
  fecha: Date;


  constructor(usuario: User, productos: Product[], montoTotal: number, fecha: Date) {
    this.usuario = usuario;
    this.productos = productos;
    this.montoTotal = montoTotal;
    this.fecha = fecha;
  }
}
