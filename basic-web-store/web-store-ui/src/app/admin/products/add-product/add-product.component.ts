import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {ProductService} from '../../../services/product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../store/cart/cart.component';
import {Product} from '../../../domain/Product';
import {ItemCarrito} from '../../../domain/ItemCarrito';
import {User} from '../../../domain/User';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private router: Router,
              public dialogRef: MatDialogRef<AddProductComponent>,
              private productService: ProductService) {
  }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const product = new Product(null, this.addForm.value.name, this.addForm.value.category, this.addForm.value.price,
        this.addForm.value.stock, this.addForm.value.description, null);
    this.productService.saveOrUpdateProduct(product)
      .subscribe( response => {
        if (response === true){
          this.data.resultado = 'CREA';
          this.dialogRef.close(this.data);
        }else{
          this.data.resultado = 'ERROR';
          this.data.error = 'No se pudo completar la operacion\nSi el problema persiste contacte a soporte.';
          this.dialogRef.close(this.data);
        }
      }, error => {
        this.data.resultado = 'ERROR';
        this.data.error = error;
        this.dialogRef.close(this.data);
      });
  }
}
