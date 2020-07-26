package com.scyula.webstorewebservices.rest;

import com.scyula.backend.domain.User;
import com.scyula.backend.repository.UserRepoImplementation;
import com.scyula.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class LoginController {

    @Autowired
    private UserRepoImplementation userService;

    @GetMapping(path = "/user")
    public List listUser(){
        return userService.findAll();
    }

    @PostMapping(path = "/user")
    public User create(@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping(path = "/user/{id}")
    public User findOne(@PathVariable long id){
        return userService.findOne(id);
    }

    @PutMapping(path = "/user/{id}")
    public User update(@PathVariable long id, @RequestBody User user){
        user.setId(id);
        return userService.save(user);
    }

    @DeleteMapping(path = "/user/{id}")
    public void delete(@PathVariable(value = "id") Long id){
        userService.delete(id);
    }


    @GetMapping(value = "/user/current")
    public User getCurrent() {
        String user = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.findByUsername(user);
    }
    @PostMapping(path = "/user/update")
    public User manualUpdate(@RequestBody User user){
        return userService.update(user);
    }

}
