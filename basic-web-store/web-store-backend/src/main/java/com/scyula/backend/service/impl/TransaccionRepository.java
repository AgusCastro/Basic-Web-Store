package com.scyula.backend.service.impl;

import com.scyula.backend.domain.Product;
import com.scyula.backend.domain.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransaccionRepository extends JpaRepository<Transaccion, String>{
    public List<Product> findByUser(long id);
}
