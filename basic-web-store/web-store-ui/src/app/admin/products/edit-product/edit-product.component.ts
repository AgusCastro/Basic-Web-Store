import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../../store/cart/cart.component';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../domain/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public dialogRef: MatDialogRef<EditProductComponent>,
              private productService: ProductService) {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required]
    });
    const product = this.data.product;
    this.addForm.patchValue({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      description: product.description
    });
  }

  addForm: FormGroup;

  ngOnInit(): void {
  }

  onSubmit(): void {
    const product = new Product(this.addForm.value.id, this.addForm.value.name, this.addForm.value.category, this.addForm.value.price,
      this.addForm.value.stock, this.addForm.value.description, null);
    this.productService.saveOrUpdateProduct(product)
      .subscribe( response => {
        if (response === true){
          this.data.resultado = 'CREA';
          this.dialogRef.close(this.data);
        }else{
          this.data.resultado = 'ERROR';
          this.data.error.message = 'No se pudo completar la operacion';
          this.dialogRef.close(this.data);
        }
      }, error => {
        this.data.resultado = 'ERROR';
        this.data.error = error;
        this.dialogRef.close(this.data);
      });
  }
}
