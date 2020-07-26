package com.scyula.backend.service;

import com.scyula.backend.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    User save(User user);
    List<User> findAll();
    User findOne(long id);
    void delete(long id);
    User findByUsername(String id);
}

