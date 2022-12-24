package com.src.riot.controller;

import com.src.riot.model.User;
import com.src.riot.model.types.UserStatus;
import com.src.riot.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class WelcomeController {
    private final UserService userService;

    public WelcomeController(UserService userService) {
        this.userService = userService;
    }

//    @GetMapping
//    public void get


    @PostMapping("/register")

    public void createUser(@RequestBody User user) {
        userService.createNewUser(user);
    }


}
