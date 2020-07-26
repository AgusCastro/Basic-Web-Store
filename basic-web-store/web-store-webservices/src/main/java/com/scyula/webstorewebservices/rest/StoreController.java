package com.scyula.webstorewebservices.rest;

import com.scyula.backend.domain.ItemCarrito;
import com.scyula.backend.domain.Product;
import com.scyula.backend.domain.Transaccion;
import com.scyula.backend.domain.User;
import com.scyula.backend.repository.ProductRepoImplementation;
import com.scyula.backend.repository.TransaccionRepoImplementation;
import com.scyula.backend.repository.UserRepoImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("store")
public class StoreController {

    @Autowired
    private ProductRepoImplementation productService;
    @Autowired
    private TransaccionRepoImplementation transaccionService;

    @Autowired
    private UserRepoImplementation userService;

    @GetMapping(path = "/product/allProducts")
    public List<Product> getProduct(){
        return productService.getAllProducts();
    }

    @GetMapping(path = "/test")
    public Boolean test(){
        return true;
    }

    @PostMapping(value = "/transaccion/venta")
    public Boolean realizarVenta(@RequestBody ItemCarrito[] items){
        String user = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Transaccion transaccion = new Transaccion();
        ArrayList<Product> listadoProductos = new ArrayList<>();
        double montoTotal = 0;
        for (ItemCarrito item : items){
            listadoProductos.add(item.getProducto());
            montoTotal = montoTotal + item.getMontoTotal();
            item.getProducto().setStock(item.getProducto().getStock() - item.getCantidad());
            this.saveOrUpdateProduct(item.getProducto());
        }
        transaccion.setProductList(Arrays.asList(items));
        transaccion.setMontoTotal(montoTotal);
        transaccion.setUser(userService.findByUsername(user));
        transaccion.setFecha(Date.valueOf(LocalDate.now()));
        return transaccionService.saveTransaccion(transaccion);
    }

    @GetMapping(path = "/product/searchByCategory/{category}")
    public List<Product> getProductByCategory(@PathVariable("category") String category){
        return productService.findByCategory(category);
    }

    @PostMapping(value = "/product/saveOrUpdate")
    public Boolean saveOrUpdateProduct(@RequestBody Product producto){
        return productService.saveProduct(producto);
    }


}
