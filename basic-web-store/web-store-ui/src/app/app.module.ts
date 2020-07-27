import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './store/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { ListUserComponent } from './admin/users/list-user/list-user.component';
import {ApiService} from './services/api.service';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {MatButtonModule} from '@angular/material/button';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { ListProductsAdminComponent } from './admin/products/list-products-admin/list-products-admin.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    RegisterUserComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductsAdminComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularStickyThingsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
