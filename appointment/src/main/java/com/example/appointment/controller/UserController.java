package com.example.appointment.controller;

import com.example.appointment.model.User;
import com.example.appointment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping
    public User create(@RequestBody User user) {
        return repo.save(user);
    }

    @GetMapping
    public List<User> getAll() {
        return repo.findAll();
    }
}
