package com.src.riot.controller;

import com.src.riot.model.User;
import com.src.riot.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WelcomeController {
    private final UserService userService;

    public WelcomeController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    Collection<User> groups() {
        return userService.userList();
    }

    @GetMapping("/users/{email}")
    public User userCheckEmail(@PathVariable String email) {
        return userService.userLoginEmail(email);
    }

    @PostMapping("/{email}")
    public User userMainPage(@PathVariable String email) {
        return userService.userLoginEmail(email);

    }

}

//    @PostMapping("/register")
//
//    public void createUser(@RequestBody User user) {
//        userService.createNewUser(user);
//    }
//


