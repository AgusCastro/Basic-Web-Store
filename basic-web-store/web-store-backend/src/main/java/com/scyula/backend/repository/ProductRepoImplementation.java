package com.scyula.backend.repository;

import com.scyula.backend.domain.Product;
import com.scyula.backend.domain.User;
import com.scyula.backend.service.ProductService;
import com.scyula.backend.service.impl.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductRepoImplementation implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Boolean saveProduct(Product product) {
        try {
//
//            Product productFromDb = productRepository.getOne(product.getId());
//            if(productFromDb == null){
//                productRepository.save(product);
//            }else{
//                productFromDb.setName(product.getName());
//                productFromDb.setCategory(product.getCategory());
//                productFromDb.setDescription(product.getDescription());
//                productFromDb.setPrice(product.getPrice());
//                productFromDb.setStock(product.getStock());
//                productRepository.save(productFromDb);
//            }
            productRepository.save(product);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


    public Product getProduct(Integer id) {
        try {
            return productRepository.getOne(id);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<Product> getAllProducts() {
        try {
            return productRepository.findAll();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public List<Product> findByCategory(String category) {
        try {
            return productRepository.findByCategoryContainingIgnoreCase(category);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
