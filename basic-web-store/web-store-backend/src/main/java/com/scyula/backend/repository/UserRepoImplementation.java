package com.scyula.backend.repository;

import com.scyula.backend.domain.User;
import com.scyula.backend.security.config.SecurityConfig;
import com.scyula.backend.service.UserService;
import com.scyula.backend.service.impl.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service(value = "userService")
public class UserRepoImplementation implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userDao;
    @Autowired
    private SecurityConfig securityConfig;

    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        User user = userDao.findByUsername(userId);
        if(user == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(userId));
    }

    private List<SimpleGrantedAuthority> getAuthority(String name) {
        User user = userDao.findByUsername(name);
        return Arrays.asList(new SimpleGrantedAuthority("ROLE_"+user.getRole()));
    }

    public List<User> findAll() {
        List<User> list = new ArrayList<>();
        userDao.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public User findOne(long id) {
        return userDao.findById(id).get();
    }

    @Override
    public void delete(long id) {
        userDao.deleteById(id);
    }

    @Override
    public User findByUsername(String id) {
        User user = userDao.findByUsername(id);
        if(user == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return user;
    }

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public User save(User user) {
        User aux = userDao.findByUsername(user.getUsername());
        if(aux != null){
            user.setPassword(aux.getPassword());
            user.setRole(aux.getRole());
        }else{
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole("USER");
        }
        return userDao.save(user);
    }

    public User update(User user) {
        User aux = userDao.findByUsername(user.getUsername());
        aux.setAge(user.getAge());
        aux.setEmail(user.getEmail());
        aux.setFirstName(user.getFirstName());
        aux.setLastName(user.getLastName());
        return userDao.save(user);
    }
}

