package com.scyula.backend.repository;

import com.scyula.backend.domain.Product;
import com.scyula.backend.domain.Transaccion;
import com.scyula.backend.service.TransaccionService;
import com.scyula.backend.service.impl.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransaccionRepoImplementation implements TransaccionService {

    @Autowired
    private TransaccionRepository transaccionRepository;

    public Boolean saveTransaccion(Transaccion transaccion) {
        try {
            transaccionRepository.save(transaccion);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Transaccion getTransaccion(String id) {
        try {
            return transaccionRepository.getOne(id);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<Transaccion> getAllTransaccions() {
        try {
            return transaccionRepository.findAll();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
