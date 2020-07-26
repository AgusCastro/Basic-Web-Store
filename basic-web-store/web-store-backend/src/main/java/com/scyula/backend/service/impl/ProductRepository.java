package com.scyula.backend.service.impl;

import com.scyula.backend.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
    public List<Product> findByName(String name);
    public List<Product> findByCategoryContainingIgnoreCase(String category);
}
