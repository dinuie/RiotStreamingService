package com.src.riot.controller;

import com.src.riot.model.User;
import com.src.riot.model.types.UserStatus;
import com.src.riot.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    protected User mapUserData(User user) {
        User userCreator = new User(user.getId(), user.getUserName(), user.getUserDateOfBirth(), user.getUserEmail(), user.getUserPassword(), UserStatus.Active);
        return userCreator;
    }
}
