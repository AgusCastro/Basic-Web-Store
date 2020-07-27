export class Product{
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  cantidad: number;


  constructor(id: number, name: string, category: string, price: number, stock: number, description: string,
              cantidad: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.cantidad = cantidad;
  }
}
