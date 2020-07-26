package com.scyula.backend.repository;

import com.scyula.backend.domain.ItemCarrito;
import com.scyula.backend.service.ItemCarritoService;
import com.scyula.backend.service.impl.ItemCarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemCarritoRepoImplementation implements ItemCarritoService {

    @Autowired
    private ItemCarritoRepository itemCarritoRepository;

    public Boolean saveItemCarrito(ItemCarrito itemCarrito) {
        try {
            itemCarritoRepository.save(itemCarrito);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public ItemCarrito getItemCarrito(String id) {
        try {
            return itemCarritoRepository.getOne(id);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<ItemCarrito> getAllItemCarrito() {
        try {
            return itemCarritoRepository.findAll();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
